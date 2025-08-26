import { CountdownCircleTimer } from "react-countdown-circle-timer";


interface TemporizadorPros {
  duracao: number,
 tempoEsgotado: ()=> void

}

const Temporizador = ({duracao, tempoEsgotado}: TemporizadorPros)=> {
  return (
    <div className="  w-screen  h-full flex items-center justify-center">
      <CountdownCircleTimer
        isPlaying
        duration={ duracao}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        onComplete={()=>{
          tempoEsgotado()
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Temporizador;
