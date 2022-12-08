// @ts-nocheck
let tag;
/** @param {Parameters<import('./[tag]').PageLoad>[0]} event */
export async function load({params}) {
    tag = params.tag;
    console.log("tag" + tag)

		return {tag}
}
