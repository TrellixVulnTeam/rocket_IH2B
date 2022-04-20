import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList () {
    return (
        <section className='repository-list'><h1> Lista de Repositorios </h1>
<ul>
</ul>
<RepositoryItem repository= '1' />
<RepositoryItem />
<RepositoryItem />
<RepositoryItem />
        </section>
       
     );
}