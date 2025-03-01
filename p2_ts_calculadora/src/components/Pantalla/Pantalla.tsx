import "./Pantalla.css"

interface PantallaProps {
    input: string;
}

const Pantalla = ({ input }: PantallaProps) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;