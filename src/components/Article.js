import React from "react";
import './Article.css'

function Article(props) {
  return   <article class="center mw5 mw6-ns hidden ba mv4">
            <h1 class="f4 bg-near-black white mv0 pv2 ph3">Name</h1>
            <div class="pa3 bt">
                <p class="f6 f5-ns lh-copy measure mv0">
                {props.name}
                </p>
            </div>
          </article>
}

export default Article;