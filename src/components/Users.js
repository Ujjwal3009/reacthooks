import useApi from "../hooks/useApi"



export default function  Users(){
    const data = useApi("https://api.github.com/users");
   
    return (
        <div>
            <ul>
            {
                data.map(users =>(

                    <li key={users.id}>{users.login}</li>
                ))
            }
            </ul>
        </div>
    )
}


