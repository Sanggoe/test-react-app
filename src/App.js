import './App.css';
import { useState } from 'react';

function Header(props) {
    return (
        <header>
            <h1><a href="/" onClick={(event) => {
                event.preventDefault();
                props.onChangeMode()
            }}>{props.title}</a></h1>
        </header>
    );
}

function Nav(props) {
    // const list = []
    // for (let i = 0; i < props.topics.length; i++) {
    //     let t = props.topics[i];
    //     list.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
    // }
    return (
        <nav>
            <ol>
                {props.topics.map((t) => (
                    <li key={t.id}>
                        <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
                            event.preventDefault();
                            props.onChangeMode(Number(event.target.id));
                        }}>{t.title}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={event=>{
                event.preventDefault();
                const title = event.target.title.value
                const body = event.target.body.value
                props.onCreate(title, body);
            }}>
                <p><input type='text' name='title' placeholder='title' /></p>
                <p><textarea name='body' placeholder='body' /></p>
                <p><input type='submit' value='Create'/></p>
            </form>
        </article>
    )
}

export default function App() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' }
    ]);
    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, WEB" ></Article>
    } else if (mode === 'READ') {
        let title, body = null;
        // eslint-disable-next-line no-lone-blocks
        {
            topics.map((topic) => {
                if (topic.id === id) {
                    title = topic.title;
                    body = topic.body;
                }
            })
        }
        content = <Article title={title} body={body}></Article>
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id:nextId, title:_title, body:_body};
            // const newTopics = [...topics]
            // newTopics.push(newTopic)
            // setTopics(newTopics)
            setTopics([...topics, newTopic])
            setMode('READ')
            setId(nextId)
            setNextId(nextId + 1)
        }}></Create>
    }
    return (
        <div>
            <Header title="WEB" onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id)
            }}></Nav>
            {content}
            <a href='/create' onClick={(event) => {
                event.preventDefault();
                setMode('CREATE');
            }}>Create</a>
        </div>
    );
}