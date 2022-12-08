
<!-- preloader -->

<script context="module">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // import blogAsJSON from '$lib/components/blog/blog.json'
    // let entryById;
    // /** @type {import('./[id]').Load} */
    // export async function load({params}) {
    //     let id = params.id;
    //     console.log("id" + id)
    //     const post = blogAsJSON;
    //     post.forEach(entry => {
    //         if(entry.id == parseInt(id)){
    //             entryById = entry;
    //         }
    //     });
    //     if(entryById == null){
    //         entryById = {
    //             id: null,
    //             topic: "ERROR",
    //             description: "Error - Your searched post was not found",
    //             date: "",
    //             link: "",
    //             tag: "error - message"
    //         }
    //     }
    //     return {props: {post}}
    // }
</script>

<!-- component -->
<script>
    import Post from '$lib/components/blog/post.svelte'
    import TopLevelHeader from '$lib/components/topLevelHeader.svelte'
	import LowLevelHeader from '$lib/components/lowLevelHeader.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
    <title>POST - {entryById.topic}</title>
</svelte:head>

<div class="content-wrapper">
    <TopLevelHeader/>
    <LowLevelHeader/>
    <Post post={entryById}></Post>
    <Footer/>
</div>

<style>
    .content-wrapper{
		margin: 0 auto;
		width: 80%;
	}
	:global(body) {
		font-family: 'Montserrat', sans-serif;
		background-color: #0c141a;
	}

	:global(body.light-mode) {
		background-color: #DFCECD;
	}
</style>