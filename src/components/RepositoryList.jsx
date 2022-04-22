import {userState} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
const repository= {
    name: 'unform',
    description: 'forms in react',
    link: 'https://github.com/unform/unform'
}
export function RepositoryList () {
    const [repositories, setRepositories] = userState([]);
    return (
        <section className='repository-list'>
            <h1> Lista de Repositorios </h1>
<ul>
</ul>
<RepositoryItem repository= {repository} />
<RepositoryItem repository= {repository} />
<RepositoryItem repository= {repository} />
<RepositoryItem repository= {repository} />
        </section>
       
     );
}