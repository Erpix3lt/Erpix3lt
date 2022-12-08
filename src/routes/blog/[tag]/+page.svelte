<script>
    import DynamicBlog from '$lib/components/blog/dynamicBlog.svelte';
    import Footer from '$lib/components/footer.svelte';
    import LowLevelHeader from '$lib/components/lowLevelHeader.svelte';
    import TopLevelHeader from '$lib/components/topLevelHeader.svelte'

     /** @type {import('./$types').PageData} */
    export let data;

    console.log("dataarr" ,data);
</script>
<div class="content-wrapper">
    <TopLevelHeader/>
    <LowLevelHeader/>
    <DynamicBlog tag={data}></DynamicBlog>
    <Footer></Footer>
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

    @media screen and (max-width: 992px) {
		.content-wrapper{
			width: 95%;
        }
	}
</style>