import { createSlice } from 'redux-starter-kit';

const App = createSlice({
  initialState: { toggle: false, controls: false, url: '' },
  reducers: {
    start: (state, action) => {
      state.toggle = action.payload;
    },
    stop: (state, action) => {
      state.toggle = action.payload;
    },
    controls: (state, action) => {
      state.controls = action.payload;
    },
    seturl: (state, action) => {
      state.url = action.payload;
    }
  }
});

export const { actions, reducer } = App;
export const { start, stop, controls, seturl } = actions;

let stream = null;
let mediaRecorder = null;
let chunks = [];
let v = null;

export const asystart = ref => dispatch => {
  (async () => {
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      v && v.remove();
      dispatch(seturl(''));
    } catch (error) {
      console.log('Cancel capture');
      return;
    }
    ref.current.srcObject = stream;
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    };
    mediaRecorder.onstop = e => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const url = window.URL.createObjectURL(blob);
      stream.getTracks().forEach(track => track.stop());

      chunks = [];
      const a = document.createElement('a');
      a.download = 'aaa.mp4';
      a.href = url;

      dispatch(seturl(url));

      v = document.createElement('video');
      v.setAttribute('controls', true);
      v.style.width = '100%';
      v.style.height = '100%';
      v.style.outline = 'none';
      v.src = url;
      document.querySelector('#box').append(v);
    };

    stream.getVideoTracks()[0].onended = () => {
      dispatch(stop(false));
      mediaRecorder.stop();
    };

    dispatch(start(!!stream));
  })();
};

export const asystop = toggle => dispatch => {
  toggle && mediaRecorder.stop();
  dispatch(stop(false));
  // stream && stream.getTracks().forEach(track => track.stop());
};
