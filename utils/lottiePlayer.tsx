import { Player } from '@lottiefiles/react-lottie-player';

export default function Animation() {
  return (
    <Player
      autoplay
      loop
      src="https://assets6.lottiefiles.com/packages/lf20_q5pk6p1k.json" // replace with your Lottie file URL or local path
      style={{ height: '50px', width: '100px' }}
    />
  );
}
