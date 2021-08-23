import "primeflex/primeflex.css";
const CardTraveler = () => {
    return (
        <div className="card">
            <div className="grid">
                <div className="col-12 md:col-6 lg:col-3 sm:flex-nowrap bg-blue-600 text-white">
                    <h3 className="text-white">Teste A</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <h3 className="">Teste B</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-12 md:col-6 lg:col-3">C</div>
                <div className="col-12 md:col-6 lg:col-3">D</div>
            </div>
        </div>
    );
};
export default CardTraveler;