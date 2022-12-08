<script type="ts">
    import blogAsJSON from './blog.json'
    import {readingTime} from './time'


    let blogAsJSONFiltered = [];
    
    export let tag;

    try{
        blogAsJSON.forEach(post => {
            if(post.tag === tag){
                blogAsJSONFiltered.push(post);
            }
        });

        if(blogAsJSONFiltered.length == 0){
            blogAsJSONFiltered[0] = {
                id: null,
                topic: "ERROR",
                description: "Error - Your searched post was not found",
                date: "",
                link: "",
                tag: "error - message"
            }
        }
    } catch(error){
        console.log("an errror happened, trying to filter the blog posts", error)
    }

</script>
<div class="post-wrapper">
    {#each blogAsJSONFiltered as post}

        <h1>{post.topic}</h1>
        <p class="date">{post.date}</p>    
        <p class="description">{post.description}</p>
        <div class="info-wrapper">
            <p class="read-time">{readingTime(post.description)}</p>
            <a class="tag" href="https://maxschmalenbach.herokuapp.com/blog/{post.tag}">
                #{post.tag}
            </a>
        </div>

    {/each}
</div>
<style>
.post-wrapper{
    padding-top: 4em;
    padding-bottom: 5em;

    width: 80%;
}
.info-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
}
h1{
    font-size: 5em;
    margin: 0;
    color: white;
}
.description{
    color: lightgray;
    font-size: 2em;
}
.date{
    padding-right: 1em;
    color: #FF9C9C;
    font-size: 1.2em;

}

.tag {
    padding-left: 1.5em;
    color: rgb(170, 194, 219);
    font-size: .8em;
}

.read-time{
    color: lightslategrey;
    font-size: .8em;
}

:global(body.light-mode) h1{
            color: #000000;
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