<script >
    import blogAsJSON from './blog.json'
    import {readingTime} from './time'
    import { base } from "$app/paths";



    function clickHref(href){
        console.log("hello");
        window.open(href, "_blank");
    }
</script>

    <div class="post-wrapper">
        <div class="section-header">
            <p>BLOG</p>
            <hr>
        </div>
        {#each blogAsJSON as post}
        <div class="post">
        <div class="post-border">
            <div class="item-border">
        
            <h1 on:click={() => clickHref(post.link)} style="cursor: pointer;">{post.topic}</h1>
            <a class="tag" href="{base}/blog/{post.tag}">
                #{post.tag}
            </a>
            <p class="description">{post.description}</p>
            <div class="info-wrapper">
                <p class="date">{post.date}</p>
                <p class="read-time">{readingTime(post.description)}</p>
            </div>
        </div>
        </div>
        </div>
        {/each}
    </div>



<style>

.post{
    padding-top: 2em;
    padding-bottom: 2em;
}

.post-border{
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.114);
    border-radius: 10px;
}

:global(body.light-mode) .post-border{
    background-color: rgba(255, 255, 255, 0.114);
}

.item-border{
    padding: 1em;
}
.post-wrapper{
    width: 60%;
}


.info-wrapper{
    display: flex;
    flex-direction: row;
}


h1{
    margin: 0;
    color: white;
}

h1:hover{
    color: rgb(218, 218, 218);
}
.description{
    color: lightgray;
    font-size: 1.2em;
}
.date{
    padding-right: 1em;
    color: #FF9C9C;
    font-size: .8em;

}

.section-header{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.section-header p {
    color: lightgray;
    padding-right: 1em;
}

hr { 
    background-color: #2F5371; height: 1px; 
    border: 0;
    width: 100%;
}

.tag {
    color: rgb(170, 194, 219);
    font-size: .8em;
    text-decoration: none;
}

    .read-time{
        color: lightslategrey;
        font-size: .8em;
    }

    :global(body.light-mode) h1{
        color: #000000;
    }

:global(body.light-mode) h1:hover{
        color: #515151;
    }

    :global(body.light-mode) hr{
        background-color: #b99b99;
    }

    :global(body.light-mode) p{
        color: #2c4961;
    }

    :global(body.light-mode) .date{
            color: #7b4949;
    }

    :global(body.light-mode) .read-time{
            color: #538ab7;
    }

    @media screen and (max-width: 992px) {
		.post-wrapper{
           width: 100%;
        }

        .description{
            color: lightgray;
            font-size: .9em;
        }

        .item-border{
            padding: .2em;
        }

        .post-border{
            padding: .2em;
        }

        h1{
            font-size: 1.5em;
        }

        .date{
            font-size: .7em;
        }

        .read-time{
            font-size: .7em;
        }

        .tag{
            font-size: .7em;
        }


}
</style>