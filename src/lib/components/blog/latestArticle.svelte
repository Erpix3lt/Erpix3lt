<script type="ts">
    import blogAsJSON from './blog.json'
    import {readingTime} from './time'



</script>
<div class="post-wrapper">

        <p class="date">LATEST {blogAsJSON[0].date}</p>
        <h1>{blogAsJSON[0].topic}</h1>
        <p class="description">{blogAsJSON[0].description}</p>
        <div class="info-wrapper">
            <p class="read-time">{readingTime(blogAsJSON[0].description)}</p>
            <a class="tag" href="https://maxschmalenbach.herokuapp.com/blog/{blogAsJSON[0].tag}">
                #{blogAsJSON[0].tag}
            </a>
        </div>

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
    font-family: 'PT MONO',monospace;
    font-size: 6em;
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
    text-decoration: none;
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
		h1{
            font-size: 4em;
        }

        .date{
            font-size: .8em;
        }

        .read-time{
            font-size: .8em;
        }

        .tag{
            font-size: .8em;
        }

        .description{
            font-size: 1.1em;
        }
        .post-wrapper{
            width: 100%;
        }
	}
</style>