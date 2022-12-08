// @ts-nocheck
import blogAsJSON from '$lib/components/blog/blog.json'
let entryById;
/** @param {Parameters<import('./[id]').PageLoad>[0]} event */
export async function load({params}) {
    let id = params.id;
    console.log("id" + id)
    const post = blogAsJSON;
    post.forEach(entry => {
        if(entry.id == parseInt(id)){
            entryById = entry;
        }
    });
    if(entryById == null){
        entryById = {
            id: null,
            topic: "ERROR",
            description: "Error - Your searched post was not found",
            date: "",
            link: "",
            tag: "error - message"
        }
    }
    return {post}
}
