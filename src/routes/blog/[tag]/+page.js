let tag;
/** @type {import('./[tag]').PageLoad} */
export async function load({params}) {
    tag = params.tag;
    console.log("tag" + tag)

		return {tag}
}
