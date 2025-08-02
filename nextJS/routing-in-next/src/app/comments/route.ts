import { comments } from './data';
import { type NextRequest } from 'next/server';

/** Simple GET request from old implementation */
// export async function GET() {
// 	return Response.json(comments);
// }

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	/** This will grab the query params from localhost:3000/comments?query=first i.e first */
	const query = searchParams.get('query');

	/** In case of multiple params we can get it in same way as above
	 * const id = searchParams.get("id");
	 */

	const filteredComments = query
		? comments.filter((comment) => comment.text.includes(query))
		: comments;

	return Response.json(filteredComments);
}

export async function POST(request: Request) {
	const comment = await request.json(); // provides the object coming in body
	const newComment = {
		id: comments.length + 1,
		text: comment.text,
	};

	comments.push(newComment);

	// By default response.json would send out 200 status, but as we are creating new resource 201 is more appropriate
	return new Response(JSON.stringify(newComment), {
		headers: { 'Content-Type': 'application/json' },
		status: 201,
	});
}
