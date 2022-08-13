function Content(props) {
    return (
      <article>
          <h2>{props.title}</h2>
          {props.sub}
      </article>
    );
  }

  export default Content;