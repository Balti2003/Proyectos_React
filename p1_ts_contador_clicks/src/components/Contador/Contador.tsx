import "./Contador.css";

interface ContadorProps {
    numClicks: number;
}

const Contador = ({ numClicks }: ContadorProps) => {
    return (
        <div className="contador">
            {numClicks}
        </div>
    )
};

export default Contador; 