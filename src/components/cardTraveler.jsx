import "primeflex/primeflex.css";
import useSwr from "swr";
import Link from "next/link";
import fetcher from "../services/HttpRequestService";
import { urlGetLugares } from "../repository/Lugares";

const CardTraveler = () => {

    const { data, error } = useSwr(urlGetLugares, fetcher);

    if (error) return <div>Failed to load users</div>;
    if (!data) return <div>Loading...</div>;

    // return (
    //     <ul>
    //         {data.map((user) => (
    //             <li key={user.id}>
    //                 <Link href="/user/[id]" as={`/user/${user.id}`}>
    //                     <a>{`User ${user.id}`}</a>
    //                 </Link>
    //             </li>
    //         ))}
    //     </ul>
    // );



    // <div class="card">
    //     <div class="flex justify-content-center flex-wrap card-container yellow-container">
    //         <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">1</div>
    //         <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">2</div>
    //         <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">3</div>
    //     </div>
    // </div>

    return (
        <div className="card">
            <div className="grid">
                {data.map((lugar) => (
                    <div key={lugar.id} className="col-12 md:col-6 lg:col-3 sm:flex-nowrap bg-blue-600 text-white">
                        <h3 className="text-white">{lugar.nome}</h3>
                        <p>{lugar.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CardTraveler;