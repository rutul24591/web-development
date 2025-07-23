# NEXT JS

`Next.js` is a react framework for building full-stack web applications.
It's not feasible to create a fully-featured application ready for production.
React is a library for building user interfaces.
You need to make decisions about other features such as routing, data fetching and more.

`Next.js` uses react for building user interfaces.
It provides additional features that enable you to build production-ready applications.
These features includes `routing`, `optimized rendering`, `data fetching`, `bundling`, `compiling` and more. Advantage
We don't need to install additional packages as Next provided everything we need. Advantage
Conventions should be followed to implement the above features.

## USAGE:

1. `ROUTING` - For routing in react we need to make use of third party packages, but Next.js simplifies by providing `file based routing` by creating files and `routing is automatically generated or taken care`.
2. `API ROUTES` - Build both Client and server side components and API's within the same application for seamless integration between Backend and frontend.
3. `RENDERING` - Supports both client and server side rendering. Improved performance and SSO when implemented properly.
4. `DATA FETCHING` - Streamline data fetching. Built in async/await support.
5. `STYLING` - Flexible with styling approaches and supports css modules, tailwind, etc.
6. `OPTIMIZATION` - Out of box optimatization for images, fonts, scripts enhancing application performance.
7. `DEV AND PROD BUILD SYSTEM` - Focus on writing code instead of dealing with configurations.

## INSTALLATION:

`npx create-next-app@latest`

1. project_name ? My-project-name
2. Typescript ? Y
3. ESLint ? Y
4. Tailwind css ? Y
5. `src/` directory ? Y
6. App Router ? Y
7. Turbopack ? N
8. Import alias(`@/*` by default) ? N

## SERVER SIDE COMPONENTS AND CLIENT SIDE COMPONENTS:

1. `By default all components in next are server side components`.
2. To define a client side component(which is the traditional react component) we have to declare `use client` at the top of the file.
3. Client side components cannot function like server side components and won't act and display in route.
4. Server side components cannot make use of functions that client side component provides like using `hooks`.

## ROUTING:

1. File based routing in Next.js.
2. Define a folder called `about` and within that declare page.tsx (This convention needs to be followed).
3. Navigate to `localhost:3000/about`. The component defined within about/page.tsx get rendered.

### CONVENTIONS:

1. `All routes must live inside app folder within src directory`.
2. Route files must be named either `page.jsx` or `page.tsx`.
3. Each folder represents a segment of the URL path.
4. `Routes are directly tied to the folder name of directory`.

## NESTED ROUTING:

1. Define a folder called `blog` and within that declare page.tsx.
2. Create 2 separate folders within blog folder named `first` and `second` respectively.
3. Create page.tsx within first and second folder.
4. Now navigate for localhost:3000/blog, localhost:3000/blog/first and localhost:3000/blog/second.

## DYNAMIC ROUTING:

1. Define a folder called products and within that declare page.tsx.
2. Add following contents within.

    ```
    <>
     <h1>Product Lists</h1>
     <h2> Product 1</h2>
     <h2> Product 2</h2>
     <h2> Product 3</h2>
    </>

    ```

3. Create a new folder within products with the name wrapped as [productId] and within it define page.tsx
4. Add following content

    ```import React from 'react';

       const ProductDetails = ({ params }: { params: { productId: string } }) => {
         return (
           <>
             <h1>Details about product {params.productId}</h1>
           </>
         );
       };

       export default ProductDetails;
    ```

5. Now navigate to `localhost:3000/products`, `localhost:3000/products/1` and `localhost:3000/products/1000`.

## NESTED DYNAMIC ROUTE:

1. Check the implementation of products -> reviews folder.
2. Navigate to see `localhost:3000/products/1/reviews/100` to see nested dynamic route.

## CATCH ALL SEGMENTS:

![title](public/catch-all-segment.png)

Please check docs and docs1 folder to completely understand it as it is too verbose to describe here.

Use [...slug] or [[...slug]].
Slug is an array with queryId as params. Eg [1, 101] // feature/1/concept/101
The essential difference between [...slug] and [[...slug]] is with [[..slug]] paves a way for route /docs1 to render and return the last statement. Navigate to `localhost:3000/docs` and `localhost:3000/docs1` to know the difference.

Question: But having a page.tsx in docs should behave same right?
If UI is to be consistent or same then we can have page.tsx in docs folder or when page UI changes based on url we keep it [[...slug]] folder.

## PRIVATE ROUTE:

1. \_nameoffolder indicated private route which next won't serve. (Check \_lib folder for this)
2. So \_ at start of folder name serves to create private route making it reserve.
3. To have a folder that starts with an '\_' use %5F instead. (Check %5Flib folder for this)

### ADVANTAGES:

1. Keep UI logic separate from routing logic.
2. Having a consistent way to organize internal files in our project.
3. Easier grouping.
4. Avoiding potential naming conflict with future Next.js files naming convension.

## ROUTE GROUPS:

1. Wrapping a folder name with () informs next js to tried the route group to exclude from routes url path.
2. Name will be omitted from url path.
3. Route groups helps us to organize our code better.
4. Nesting is possible in route groups. Route groups can be nested within each other.

## LAYOUTS:

1. A page is UI that is unique to a route.
2. A layout is UI that is shared between multiple pages in the app.
3. You can define a layout by default exporting a react component from layout.js or layout.tsx file. This is the mandatory layout.
4. The component as in 3 should accept a children prop that will be populated with a child page during rendering.
5. Check layout.tsx file.

## NESTED LAYOUTS:

1. Layouts can be nested. It could be specific to product details page. You can define it within the [productId] folder.
2. Check layout.tsx in products/[productId] folder.
3. Navigate to localhost:3000/products/100 and check it out.

## ROUTE GROUPS LAYOUT:

1. Can apply layouts only to specific components within a route group.
2. Create a new folder within the (auth) called (with-layout) and add the layout.tsx with contents copied from other layout.tsx from products folder.
3. Add the register and login folder to this with-layout folder and navigate to localhost:3000/register and localhost:3000/login to see the layout being applied with contents.
4. localhost:3000/forgot-password won't have the changes for local layout as it falls outside the directory of (with-layout)

## MULTIPLE ROOT LAYOUTS:

Route Groups comes into picture.

1. Route groups let us organize our project structure without affecting URL'S.
2. Apply layouts selectively to specific parts of our application.

Create a route group (auth) and move Login and Register routes inside it.
Create a route group (marketing) and move Customer and Revenue routes inside it.
Delete the parent layout(in src/app/ folder, important else it won't work).
Add 2 layouts to (auth) and (marketing). Now (auth) route group doesn't require header as user is not loggedin(on footer is to be displayed) but marketing needs both header and footer. If we had only parent layout the header and footer would be shown to Register, Login , Customer, Revenue routes(all), but we do not need to display for Login and Register. In (auth) Layout, we can remove Header and keep footer.

After moving things around(as above), we will get an error page.tsx doesn't have a root layout. To fix this error, make sure every page has a root layout.

Check video.

### Not found page

1. Generic not found page can be used by creating a file in app. File should be named not-found as per convension.
2. Not found component can be imported using

    `import { notFound } from 'next/navigation';`

    and calling

    `notFound();`

3. Each route can have a specific not-found page, so when route doesn't match the not-found within that route is rendered instead of parent one in app folder.
4. NotFound component does not accept any props.

Question: So what about if we need to show custom messages?

`import {usePathname} from "next/navigation";`

## File colocation:

Keeping UI or components files separate in a component folder and include using

`import BarChart from '@/components/barChart';`

Or Make use of Private routes.

## ROUTING METADATA:

1. The metadata API in Next.js is a powerful feature that lets us define metadata for each page.
2. Metadata ensures our content looks great when its shared or indexed by search engines.
3. Two ways to handle metadata in layout.tsx or page.tsx.

Convensions:

1. Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its pages, while page metadata is specific to that page.
2. Metadata follows a top-down order, starting from the root level.
3. When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties.
4. We cannot use of a metadata object and a generateMetadata() within a same component/Functions. Its either or.
5. Will not work in client components.(`use client` is used). Work around for suce scenario is to abstract client logic into separate component and import and call in parent component(where metadata can be configured).

Title for routing metadata are of 2 types. One is string like "About me" or an object. Check the blog component and root layout

## LINK COMPONENT NAVIGATION:

1.  Up until now we used to manipulate the url in browser to view content, but actually what about navigation in when a link is clicked(actual usage in world apps). Here comes the Link navigation.
2.  For client side navigation, Next.js gives `<Link>` component.
3.  The `<Link>` component extends HTML's `<a>` (anchor) element, and its primary way to navigate between routes in Next.js.
4.  To use import from `"next/link"`.

         <Link href='/blog'>Blog</Link>

5.  Adding `replace` to Link will take you directly home.

## PARAMS and SEARCH PARAMS

For a given URL,

1. `params` is a promise that resolves to an object containing the dynamic route parameters(Eg id)
2. `searchParams` is a promise that resolved to an object containing the query parameters(like filters and sorting)
3. While page.tsx has access to both params and searchParams, layout.tsx has access to only params.

Async/await support is available for only server components and not the client components.
For accessing params and searchParams in client components, we will need to make use of `use` hook in react.
Check the implementation in articles/

## NAVIGATING PROGRAMATICALLY

In case consider a marketplace, where user places an order and post that we want to redirect the user to home page or as matter of fact any other route in application, we can make use of useRouter or redirect.

         import {useRouter, redirect} from "next/navigation";

         const router = useRouter();

         /** Redirect to home page */
         router.push('/');

         /** Go back in history */
         router.back();

         /** Go forward in history */
         router.forward();

         /** To replace instead of adding entry to history stack*/
         router.replace('/');

         /** We can also use redirect instead of useRouter. Check for example in products -> reviews */
         redirect('/');

## TEMPLATES:

1.  Templates are similar to layouts in that they also share same UI across multiple components/pages in our app.
2.  Whenever user navigates between routes sharing a template, you get completely a fresh start in terms with
    -   A new template component instance is mounted.
    -   DOM elements are recreated.
    -   State is cleared.
    -   Effects are resynchronized
3.  Like layouts, templates need to accept children prop to render the nested route segments.
4.  Layouts and templates can be used to together in which children of layout are rendered first before template and then page.
5.  Layout should be a go to most of the time.

        Rendering takes place in following sequence.

        Layout(children, layout.tsx) -> template(children, template.tsx) ->  page contents(page.tsx)

Take example of input element in (auth) -> layout.tsx.
Here the input element is shared between all 3 register, login, forgot-password routes.
So if we type something in input box and then make a switch between the routes, the input value remains as it is.(If layout.tsx is defined)
With template.tsx, the input box will get cleared when switch is made between the routes. (Try renaming layout.tsx to template.tsx and go to /register, type something and make a switch to /login page)

## LOADING (loading.tsx)

1. Loading provides users immediate feedback when they navigate between routes making the application feel responsive and users know they actually performed some action.
2. Next.js keeps shared layouts interactive while the new content loads. Users can make use of menu/sidebar even when main content isn't ready yet.

## ERROR HANDLING (error.tsx)

1. Can be done by creating new error.tsx file in a route.
2. ErrorBoundary must be a client component.
3. error.tsx automatically wraps route segments and their nested children in a React Error Boundary.
4. You can create custom error UIs for specific segment using file system heirarchy.
5. Error.tsx isolates errors to affected segments while keeping rest of the application functional.
6. It enables you to attempt to recover from an error without requiring a full page reload.

#### HANDLING ERRORS IN A NESTED ROUTE:

    - Errors always bubbles up to find the closest error boundary.
    - An error.tsx file not only handles errors in it own folder, but for all nested child segments below it too.
    - By strategically placing error.tsx files at different levels in your route folders, you can control exactly how detailed your error handling gets.
    - Where you put you error.tsx files makes a huge difference; It determines exactly which parts of your UI gets affected when things go wrong.

Eg. Try moving the error.tsx file from reviewId folder to products folder(check difference now on UI) and again placing it back in reviewId folder(check difference on UI now).

#### HANDLING ERRORS IN LAYOUTS:

    - An error.tsx will handle errors for all of its nested segments(child).
    - But interesting catch with layout.tsx component within same segment.
    - The error boundary won't catch the errors thrown in layout.tsx within the same segment because of how the hierarchy works.
    - The layout sits above the error boundary in the component tree or heirarchy(Check below heirarchy)
    - Solution is to move the error.tsx to parent of layout.tsx

### HANDLING GLOBAL ERRORS:

    - If an error boundary can't catch errors in the layout.tsx file from the same segment, what about the errors in root layout. It doesn't have any parent segment. How to handle those?
    - Next.js provides a special file called `global-error.tsx` that goes in the root app directory.
    - This is the last line of defense when something goes catastrophically wrong at the highest level of the app.
    - Need to include HTML and body tags here in global-error.tsx, as component is replaces the root layout.
    - Works only in production mode(as in dev will throw error).

## COMPONENT HEIRARCHY

      <Layout>
         <Template>
            <ErrorBoundary fallback={<Error />}>   // Error boundary for Run time errors, error.tsx
               <Suspense fallback={<Loading />}>     // Suspense from loading.tsx
                  <ErrorBoundary fallback={<NotFound />}> // Error boundary for Missing resources, not-found.tsx
                     <Page/>
                  </ErrorBoundary>
               </Suspense>
            </ErrorBoundary>
         </Template>
      </Layout>

## PARALLEL ROUTES

1. Parallel routes is an advanced routing mechanism that lets us render multiple pages simultaneously within the same layout.
2. Parallel routes in next.js are defined using a feature called `slots`.
3. Slots help organize content in a modular way.
4. To create a slot, we make use of the `@folder` naming convention.
5. Each defined slot automatically becomes a prop in its corresponding `layout.tsx` file.

    Note: Slots are not route segments and don't affect your url structure. Try navigating to localhost:3000/complex-dashboard/users or @users, we get `Page not found`.
    Children prop in layout.tsx is an implicit slot that doesn't need its own folder. `complex-dashboard/page.tsx` is same as `complex-dashboard/children/page.tsx`.

    Use cases of parallel routes:

    - Dashboard with multiple sections
    - Split-view interfaces
    - Multi-pane layouts
    - Complex admin interfaces

    Benefits:

    - Parallel routes are great for splitting a layout into manageable slots(especially when different teams are working on different parts). But that not the main benefit(can be done using regular components as well).

    - Independent route handling.
      Each slot in your layout, such as users, revenue, notifications, can handle its own loading and error states.
      This granular control is particularly useful in scenarios where different sections of the page load at varying speeds or encounter unique errors. We can have loading(if time consuming) or error shown for that particular slot(users, revenue, notifications)

    - Sub-navigations.
      Each slot can essentially function as a mini-application, complete with its own navigation and state management. Users can interact with each section separately, applying filters, sorting data or navigating through pages without affecting other parts.
      Eg. For notifications we can have users view archived notification instead of default one only changing the url `/complex-dashboard/archived` (archieved) or `/complex-dashboard` (default). Think of as a button/link archieved or default in notifications component.

#### UNMATCHED ROUTE:

1.  Navigation from UI
    When navigating through the UI(clicking links), Next.js keeps showing whatever was in the unmatched slots before.(For children, users, revenue)
2.  Page reload
    Next.js looks for a `default.tsx` file in each unmatched slot.
    This file is critical as it serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL. Without this file, we get a 404(Page not found).
3.  Check the default.tsx file in each users, revenue, root of complex-dashboard(for children). When on `/complex-dashboard/archived` route try refresing the page now, content within this default.tsx for each parallel route will get displayed.

#### CONDITIONAL ROUTES

1. Imagine you want to show different content based on whether a user is logged in or not.
2. You might want to display a dashboard for authenticated users but show a login page for those who aren't authenticated.
3. Conditional routes allow us to achieve this while maintaining completely separate code on same URL.
4. Check the login slot implementation in complex-dashboard.

#### INTERCEPTING ROUTES

1. Intercepting routes is an advanced routing mechanism that allows you to load a routes from another part of your application within the current layout.
2. It's particularly useful when you want to display new content while keeping youe user in the same context.
3. Consider a home page, when user clicks on login button, instead of routing to localhost:3000/login page, when can make use of modal(with `localhost:3000/login` as url).
4. Consider a photo gallery, when user clicks on a photo, instead of showing a dedicated photos page at(`localhost:3000/photos/id`) we can enlarge the photo within the same page a modal(with `localhost:3000/photos/id` as url).
5. So essentially the url is shared or refreshing the page works as well.

    Conventions:

    1. `(.)` to match segments on the same level in folder structure. It is similar to `./`(Current working directory) Check `folder2`(destination) example in `folder1` (source).
    2. For match segments that is one level above, we make use of `(..)`. Similar to `../`. Check `folder3`(destination) example in `folder1`(source)
    3. For match segments that is two level above, we make use of `(..)(..)`. Similar to `../../`. Check `folder4` (destination) example called from `folder2`(source)
    4. `(...)` to match segments from the root app directory. Check `folder5`(destination) example with in `inner-folder2`(source).

#### INTERCEPTING PARALLEL ROUTES

Check the photo-feed folder for code or navigate to localhost:3000/photo-feed

## ROUTE HANDLERS

1. We have learned how to route to pages.
2. The app router lets you create custom request handlers for your routes using a feature called Route Handlers.
3. Unlike page routes, which give us HTML content, `Route Handlers` let us build RESTful endpoints with complete control over the response.
4. Think of building a Node + Express app.
5. There is no need to set up and configure a separate server.
6. Route handlers are great when making external API requests as well. For if you're building an app that needs to talk to third-party services.
7. Route handlers run server-side, our sensitive info like private keys stays secure and never reaches the browser.
8. Route handlers are equivalent of API routes in Page router.
9. Next.JS supports `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEADER` and `OPTIONS`.
10. If an unsupported method is called, Next.js will `return` a `405` `Method Not Allowed` response.
11. Just like page routes, route handler must live within the `app` folder.
12. Create `hello` folder and add new file `route.ts`(Convention).
13. Nesting is possible for route handlers just like page routes.
14. If `page router` and `route handler` are present in same folder(`page.tsx` and `route.ts`, `route.ts` take precedence).
15. To fix point 14, move route.ts into a `api` folder.

##### GET

         export async function GET() {
            return Response.json(comments);
         }

##### POST

         export async function POST(request: Request) {
            const comment = await request.json(); // provides the object coming in body
            const newComment = {
               id: comments.length + 1,
               text: comment.text,
            };

            comments.push(newComment);

            return new Response(JSON.stringify(newComment), {
               headers: { 'Content-Type': 'application/json' },
               status: 201,
            });
         }

#### DYNAMIC ROUTE HANDLERS

1. For simple GET and POST, we do no require any specific id for the request, but for UPDATE, PATCH, DELETE we do. This is when dynamic route handlers come into picture.
2. Dynamic route handlers works similar to dynamic page routes.([id])

##### GET by Id

         /** For now we are interested in accessing id(context) for request, so placing underscore to request */
         export async function GET(
            _request: Request,
            {
               params,
            }: {
               params: Promise<{ id: string }>;
            },
         ) {
            const { id } = await params;
            const comment = comments.find((comment) => comment.id === parseInt(id));

            return Response.json(comment);
         }

##### PATCH

         export async function PATCH(
            request: Request,
            {
               params,
            }: {
               params: Promise<{ id: string }>;
            },
         ) {
            const { id } = await params;
            const body = await request.json();
            const { text } = body;

            const index = comments.findIndex((comment) => comment.id === parseInt(id));

            comments[index].text = text;

            return Response.json(comments[index]);
         }

##### DELETE

         export async function DELETE(
            request: Request,
            {
               params,
            }: {
               params: Promise<{ id: string }>;
            },
         ) {
            const { id } = await params;

            const index = comments.findIndex((comment) => comment.id === parseInt(id));
            const deletedComment = comments[index];

            comments.splice(index, 1);

            return Response.json(deletedComment);
         }

#### URL QUERY PARAMETERS

1.  Suppose in the comments array we want to find all comments having `first` in text of the comment.
2.  We will pass and make a request like: `GET` `localhost:3000/comments?query=first
3.  For this we will need to modify `GET` request.
4.  This is especially used for search, sorting, pagination, etc.

         import { type NextRequest } from 'next/server';

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

#### HEADERS

1. HTTP Headers represent the metadata assiciated with an API request and response.

##### Request HEADERS

1.  These headers are sent by the client, such as web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.
2.  `User-Agent` which identifies the `browser` and `operating system` to the server.
3.  `Accept` which indicates the content types like `text`, `video` or `image formats` that the client can process.
4.  `Authorization` header used by the client to authenticate itself to the server. It carries credentials allowing controlled access to the resources.

         //Options 1
         import { type NextRequest } from 'next/server';

         export async function GET(request: NextRequest) {
            const requestHeaders = new Headers(request.headers);
            console.log(requestHeaders.get('Authorization'));

            return new Response('Profile API data');
         }



         //Option 2
         import {headers} from "next/headers";

         export async function GET(request: NextRequest) {
            const headerList = await headers();
            console.log(headerList.get('Authorization'));

            return new Response('Profile API data');
         }

##### RESPONSE HEADERS

1.  These are send back from the server to the client. They provide information about the server and the data being sent in the response.
2.  `Content-type` header which indicates the media type of the response. it tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

         import {headers} from "next/headers";

         export async function GET(request: NextRequest) {
            const headerList = await headers();
            console.log(headerList.get('Authorization'));

            /** This will go as plain/text for response headers. Check network tab in browser*/
            // return new Response('Profile API data');

            /** This will still go as plain/text for response headers.*/
            return new Response('<h1>Profile API data</h1>');

            /** This will go as text/html and will be interpreted by browser as html and display as html tag*/
            return new Response('<h1>Profile API data</h1>', {
               headers: {
                  'Content-Type': 'text/html',
               },
            });
         }

#### COOKIES

1.  Cookies are small pieces of data that a server sends to a user's web browser.
2.  The browser can store the cookies and send them back to the same server with future requests.
3.  Cookies serve 3 main puspose:

    -   Managing session(like user login and shopping carts)
    -   Handling personalization(such as user preferences and themes)
    -   Tracking (Like recording and analyzing user behaviour)

##### Setting cookie:

         //Option 1
         return new Response('<h1>Profile API data</h1>', {
            headers: {
               'Content-Type': 'text/html',
               'Set-Cookie': 'theme=dark',
            },
         });

         //Option 2
         import {headers, cookies} from "next/headers";

         const cookieStore = await cookies();
         cookieStore.set("resultsPerPage", "20");

##### Reading cookie

         //Option 1
         const theme = request.cookies.get("theme");
         console.log(`Cookie`, theme);

         //Option 2
         console.log(cookieStore.get('resultsPerPage'));

#### REDIRECTS IN ROUTE HANDLERS

1.  Suppose we have an API of users which is version 1(v1) with very basic information like below
    `{
   "id": "1",
   email: "abc@gmail.com",
   fullName: "John Doe",
   createdAt: "2024-01-01T01:26:29:00Z"
},
{
   "id": "2",
   email: "def@gmail.com",
   fullName: "Joe Doe",
   createdAt: "2024-01-01T01:26:29:00Z"
}`

2.  Now if we have more information and a new API is created(v2) how to redirect the old API route to the new one.
3.  Here comes redirect.
    In /api/v1/users

         import {redirect} from 'next/navigation';

         redirect("/api/v2/users");

4.  So now all requests for endpoint `/api/v1/users/` will be redirected to `/api/v2/users`.

#### CACHING

1. Route handlers are not cached by default but you can opt inot caching when using the GET method.
2. Caching only works with GET methods.
3. Other HTTP methods like POST, PUT or DELETE are never cached.
4. If you're using dynamic functions like headers() and cookies(), or working with the request object in your GET method, caching won't be applied.
5. Check time and categories folder in src/app for more info.

#### MIDDLEWARE

1. Middlewares in Next.js is a powerful feature that lets you intercept and control the flow of requests and responses throughout your application.
2. It does this at a global level, significantly enhancing features like redirects, URL rewrites, authentication, headers, cookies and more.
3. Middleware lets you specify paths where it should be active
    1. Custom matcher config
    2. Confitional statements
4. Check the src/middleware.ts file for more info.

ROUTING SUMMARY SECTIONS:

1. Route definition
2. Pages and layouts
3. Dynamic routes
4. Route groups
5. Linking and navigation
6. Loading and error states
7. Parallel and intercepting routes
8. Route Handlers and middleware.

---

## 5. RENDERING

1. Rendering is the process of transforming the component code you write into user interfaces that users can see and interact with.
2. In Next.js, tricky part to building a performant application is figuring out when and where this transformation should happen.
3. CSR, SSR and RSCs?
4. Follow through rendering in react first, then switch to next js rendering.(Bit complex).

### CLIENT SIDE RENDERING

Flow:

1. When a client sends a request to server, the server with pass HTML(with just <div id="root"></div>) and JS references.
2. Then client requests JS, the server replies with JS files.
3. The client, then generates proper HTML injecting the code in DOM in root(div) element and get displayed on browser.

4. The above approach- where the client transforms React components into what you see on screen - that's what we call client-side rendering(CSR).
5. CSR became super popular for SPA's and everyone was using it.
6. It wasn't long before developers began noticing somme inherent drawbacks to this approach.

#### Drawbacks:

      - SEO
            1. When search engines crawl your site, they are mainly looking for HTML content. But with CST, your initial HTML is basically just an empty div- not great for search engines trying to figure out what you page is about. Search engines cannot properly index it.
            2. When you have a lot of nested components making API calls, the meaningful content might load too slowly for search engines to even catch it.

      - PERFORMANCE
            1. Your browser(the client) has to do everything; fetch data, build the UI, make everything interactive... Lots of work.
            2. Users often end up staring at a blank screen or a loading spinner while all this happens,
            3. Every time you add a new feature to your app, that JS bundle gets bigger, making users wait even longer.
            4. This is especially frustrating for people with slower internet connections.
            5. Users can suffer from slow load times, as their browsers download, parse and execute JS before seeing any meaningful content(On screen).

### SERVER SIDE RENDERING

Flow:

1. When a client sends a request to server, the server with pass HTML(Generated HTML) and JS references.
2. Then client requests JS, the server replies with JS files.
3. `Hydration`.(then interative UI).

    1. During hydration, react takes control in the browser and reconstructs the component tree in memory, using the server-rendered HTML as a blueprint.
    2. It carefully maps out where all the interactive elements should go, then hooks up the JS logic.
    3. This involves initializing application state, adding click and mouseover handlers and setting up all the dynamic features needed for a full interactive user experience.

    #### SERVER SIDE SOLUTIONS

    1. Static site generation(SSG)
       SSG happens during build time when you deploy your application to the server. This results in pages that are already rendered and ready to serve. It's perfect for content that stays relatively stable(static), like blog posts.
    2. Server side rendering(SSR)
       SSR, on other hand, renders pages on-demand when users request them. It's ideal for personalized content like social media feeds where the HTML changes based on who's logged in.

#### Drawbacks

1. You have to fetch everything before you can show something.
   Components cannot start rendering and then pause to "wait" while data is still being loaded. If a component needs to fetch data from a database or another source(like an API), this fetching must be completed before the server can begin rendering the page. This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.
2. You have to load everything before you can hydrate anything. (TLDR Having to load the data for the entire page)
   For successful hydration, where react adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree. This means that all the JS for the components must be loaded on the client before you can start hydrating any of them.(TLDR Loading the JS for the entire page)
3. You have to hydrate everything before you can interact with anything
   React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree. As a consequence, all components must be hydrated before you can interact with any of them.(TLDR Hydrating the entire page)

All or nothing waterfall problem as above(1 must be done before 2 and 2 must be done before 3)

1. Having to load the data for the entire page
2. Loading the JS for the entire page
3. Hydrating the entire page

At once, create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one. This becomes really inefficient when some parts of you app are slower than others, as is often the case in real world apps.
This leads to new RSC's model(React 18 introduced suspense SSR architecture).

## SUSPENSE SSR ARCHITECTURE

Use the <Suspense></Suspense> component to unlock 2 major SSR features:

1. HTML streaming on the server
2. Selective hydration on the client.

Consider the below structure of code

```TSX
            <Layout>
               <Header />
               <Sidenav />
               <MainContent />
               <Footer/>
            </Layout>
```

First receive the HTML, then hydrate the entire code
Wrap the `MainContent` with suspense. When you are doing this, you are telling react, don't wait for this part(MainContent) and start streaming the rest of the page. React will show the loading spinner for that part(MainContent), while working on rest of the page. When the server is ready for this part(MainContent), react streams the additional HTML through the ongoing stream along with the tiny bit of JS that knows exactly where to position that HTML. Users can see the content of MainContent even before react finishes loading on the browser.

```TSX
            <Layout>
               <Header />
               <Sidenav />
               <Suspense fallback={<Spinner/>}>
                  <MainContent />
               </Suspense>
               <Footer/>
            </Layout>
```

-   HTML streaming solves our first problem of all or nothing waterfall.
    You don't have to fetch everything before you can show something. If a particular section is slow and could potentially delay the initial HTML, no problem. It can be seamlessly integrated into the stream later when its ready. This is how `Suspense` facilitates the server side HTML streaming.

The other hurdle. Even with faster HTML delivery, we can't start hydrating until we've loaded all the JS for the main section(Problem 2 of all or nothing waterfall). If that's a big chunk of code, we're still keeping users waiting from being able to interact with the page. To mitigate this we have `CodeSplitting`.

### CODE SPLITTING

1. It let's you tell your bundler,"These parts of the code aren't urgent- split them into separate scripts".
2. Using `React.lazy()` for code splitting separates your main section's code from the core JS bundle.
3. The browser can download React and most of your app's code independently, without getting stuck waiting for that main sections code.

#### Selective hydration on the client

1. By wrapping your main section in a `<Suspense>` component, you're not just enabliung streaming but alos telling React its okay to hydrate other parts of the page before everything's ready. This is `selective hydration`.
2. It allows for the hydraton of the parts of the page as they become available, even before the rest of the HTML and the JS code are fully downloaded.
3. Thanks to selective hydration, a heavy chunk of the JS won't hold up the rest of your page becoming interactive.
4. Selective hydration also solves the third problem(all or nothing waterfall) i.e the necessity to hydrate everything to interact with something. React starts hydrating as soon as it can, which means users can interact with things like the header and side navigation without waiting for the main content. `This process is automatically managed by React`. In scenarios where multiple components are awaiting hydration, React prioritizes hydration based on user interactions.

```TSX
   import {lazy} from 'react';
   const MainContent = lazy(() => import('./MainContent.js'));

   <Layout>
      <Header />
      <Sidenav />
      <Suspense fallback={<Spinner/>}>
         <MainContent />
      </Suspense>
      <Footer/>
   </Layout>
```

`Thus is solves all problems of the all or nothing waterfall.`

#### Drawbacks of suspense SSR

1. Even though we're streaming JS code to the browser bit by bit, eventually users still end up downloading the entire code for the webpage. As we keep adding features to out apps, this code keeps growing. `DO USERS NEED TO DOWNLOAD SO MUCH DATA?`
2. Right now, every React component gets hydrated on the client side, whether it needs interactivity or not. This means we're using up resources and slowing down load times and time to interactivity by hydrating components that might just be static content. `SHOULD ALL COMPONENTS BE HYDRATED, EVEN THOSE THAT DON'T NEED INTERACTIVITY ?`.
3. Even though servers are way better at handling heavy processing, we're still making users' devices do bulk of the JS work. This can really slow things down, especially on less powerful devices. `SHOULDN'T WE BE LEVERAGING OUR SERVERS MORE ?`.

### EVOLUTION OF REACT

1. CSR -> SSR -> Suspense for SSR
2. Suspense for SSR brought us closer to a seamless rendering experience.

#### CHALLENGES

1. Large bundle sizes causing excessive download for users.
2. Unnecessary hydration delaying interactivity.
3. Heavy client side processing leading to poorer performance.

## REACT SERVER COMPONENTS(RSC)

1. React server components(RSC) represents a new architecture designed by the React team.
2. This approach leverages the strengths of both server and client environments to optimize efficiency, load times and interactivity.
3. The architecture introduces a dual-component model, i.e Client components and server components.
4. This distinction is based not on the components' functionality but rather on their execution environment and the specific systems they are designed to interact with.

#### CLIENT COMPONENTS:

1. Client components are the familiar React components we've been using.
2. They are typically rendered on the client side(CSR) but they can also be rendered to HTML on the server(SSR), allowing users to immediately see the page's HTML content rather than a blank screen. `Client components can render on the server`.
3. Optimization stratey. Client components primarily operate on the client bu can (and should) also run once on the server for better performance.
4. Client components have full access to the client environment, such as browser, allowing them to use state, effects and event listeners for handling interactivity.
5. They can also access browser-exclusive API's like geolocation or local storage, allowing you to build UI for specific use cases.
6. In fact, the term "Client component" doesn't signify anything new; it simply helps differentiate these components from the newly introduced server components.

#### SERVER COMPONENTS:

1. Server components represent a new type of React component specifically designed to operate exclusively on the server.
2. Unlike client components, their code stays on the server and is never downloaded on the client.
3. This design choice offers multiple benfits to React components.

#### BENEFITS:

1. Smaller bundle sizes - Since server components stay on the server, all their dependencies stay there too. This is fantastic for users with slower internet connections or less powerful devices since they don't need to download, parse and execute that JS. Plus, there's no hydration step, making your app load and become interactive faster.
2. Direct access to server-side resources - Server components can talk directly to databases and file systems, making data fetching super efficient without any client side processing. They use the server's power and proximity to data sources to manage compute intensive rendering tasks.
3. Enhanced security - Since server components run only on the server, sensitive data and logic - like API keys and tokens - never leave the server.
4. Improved data fetching - Server components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering and the number of requests the client needs to make.
5. Caching - When you render on the server, you can cache the results and reuse them for different users and requests. This means better performance and lower costs since you're not re-rendering and re-fetching data all the time.
6. Faster initial page load and First contentful paint - By generating HTML on the server, users see your content immediately- no waiting for Javascript download and execute.
7. Improved SEO - Search engine bots can easily read the server-rendered HTML, making your pages more indexable.
8. Efficient streaming - Server components can split the rendering process into chunks that stream to the client as they're ready. This means users start seeing content faster instead of waiting for the entire page to render on the server.

(RSC continued)
Server components handle data fetching and static rendering, while client components take care of rendering the interactive elements. The beauty of this setup is that you get the best of both server and client rendering while using a single language, framework and set of API's.

RSC key takeaways:

1. React server components offer a new approach to building react apps by separating components into 2: Server components and client components.
2. Server components eun exclusively on the server - they fetch data and prepare content without sending code to the browser. This makes our app faster because users download less code. However, they can't handle any interactions.
3. Client components, on the other hand, run in the browser and manage all the interactive parts like clicks and typing.They can also get an initial server render for faster page loads.

`OK BUT HOW DOES THE EVOLUTION OF REACT CONNECT WITH NEXTJS?`

`App Router` in Next.js is built entirely on the RSC architecture. All the benefits we've discussed above are already built in latest version of Next.js. Understanding the evolution of React's rendering provides the foundation needed for you to grasp what we're about to explore in Next.js.

## RSC + Next.js

1. Every component in a Next.js app defaults to being server component.
2. Running components on the server brings several advantages: zero-bundle size, direct access to server side resources, improved security and better SEO.
3. Limitiations: Server components can't interact with browser API's or handle user interactions.
4. "use strict" to make a client component.

##### Comments:

1. Adding a comment on server components, you will be able to see in inspector(with server prepended) and server logs as well.
2. Adding a comment on client components, once initially the comment will be logged in inspector and not on server.
   But on refresh it will get logged on both inspector and server as well. That is because once you reload the page, the component will get rendered once on the server once
   for user to immediately see the HTML content of the page instead a blank page and rendered again on client side during hydration.(Somewhat confusing but will get used to)
3. In development, the `comment will be seen twice` as it uses `strict mode`. Won't be the case in production.

### RSC RENDERING LIFECYCLE

Key players: `Browser`(Client), `Next.JS`(Framework) and `React`(library)

##### LOADING SEQUENCE

1. When the browser requests for a page, Next.js App Router matches the requested URL to the server component.
2. Next.js then instructs react to render the server component.
3. React renders the server component and any child components that are server components, converting them into a special Json format known as `RSC payload`.(inspect the network tab link url once clicked)
4. During this process, if any server component suspends, react pauses the rendering of the subtree and sends a placeholder value instead.
5. While 3 and 4 are happening, react also prepares instructions for the Client components we will need later.
6. Next.js then takes the RSC payload and Client components instructions from react to generate the HTML on the server.
7. This HTML streams to your browser right away giving a quick non-interactive preview of the route. At the same time Next.js also streams the RSC payload as react renders each piece of UI.
8. Once this reaches the browser, Next.JS processes everything that was streamed over by react. React uses the RSC payload and client component instructions to progressively render the UI.
9. Once all the client component and server component outputs has been loaded the final UI state is presented to the user. Client component undergoes hydration transforming our application from a static display into an interactive experience.

This is the initial loading sequence of the RSC's.

##### UPDATE SEQUENCE

Steps 1-5 remains same as Loading.
then
Instead of generating the HTML on the server side, Next.js streams the RSC payload to browser. On receiving the streamed response,
Next.js triggers a re-render of the route using the new content. React then carefuly reconciles or merges the new rendered output with the existing components on the screen because we're using a special JSON format instead of the HTML,
react can update everything while keeping important UI states intact, things like where you've clicked or what you've typed.

This is the RSC update sequence

## SERVER SIDE RENDERING STRATEGIES:

1. Static Rendering
2. Dynamic Rendering
3. Streaming

### STATIC RENDERING

1. Static rendering is a server rendering stretegy where we generate HTML pages when building our application. Think of it as preparing all our content in advance- before any user visits our site.
2. Once built, these pages can be cached by CDN's and served instantly to users.
3. With this approach, the same pre-rendered page can be shared among different users, giving our app a significant performance boost.
4. Static rendering is perfect for things like `blog posts`, `e-commerce product listings`, `documentation` and `marketing pages`.

### How to use?

1. Static rendering is the default strategy in app router.
2. All routes are automatically prepared at build time without any additional setup.
3. But we talking about generating HTML at build time, but we haven't built out application yet(We're just running in development mode).

##### Production VS Dev server

1. In production, we create one optimized build and deploy it- No on the fly changes after deployment. In prod, pages are pre-rendered once during the build.
2. A development server, on the other hand, focuses on the development experience. We need to see out changes immediately in the browser without rebuilding the app every time. Pages are pre-rendered on every request.

##### Build

1. Stop the running server and delete the .next folder.
2. use `npm run build` to build our project.
3. Once build completes you will see a table with Route, size and First load Js columns indicating the bundle size and load times. `Hollow circle` before each route indicates it staticly generated.
4. Next moving on, a .next folder is also created which will have generated `html` files for each route(even client component), `rsc files`(special json format generated by react representing virtual DOM in a super compact way using abbreviations and internal references) for each route. Within rsc files, for server components this payload includes the actual rendered result like the H1 tag. For client component it is different, the payload has placeholders showing where the client components should go plus references to JS files.
5. To serve, run `npm run start` and visit the browser to localhost:3000 and with dev tools open, do empty cache and hard reload.
6. Check the localhost request in network tab(response, preview).
7. Check the RSC files. These are essential for building the UI on the client side when we navigate to the pages(routes) using the link. Clear network tab, navigate to different routes(You wont see anything in network tab as everything is downloaded on initial load).
8. The navigation is quite quick. But how does next.js know to send to the routes even before we clicked anything. It is due to a technique called `Pre-fetching`.
9. Pre-fetching is a technique that preloads routes in the background as their links become visible. For static routes, Next.js automatically prefetches and caches the whole route. When our home page loads, Next.js is already prefetching about and dashboard routes for instant navigation.
10. Ok so what is the use for `html` files. That is used when you directly type `localhost:3000/profile` or `refresh` in browser, the html files gets served.

##### STATIC RENDERING SUMMARY

1. Static rendering is a strategy where the HTML is generated at build time.
2. Along with the HTML, RSC payloads for components and JS chunks for client-side hydration are created.
3. Direct route visits serve the HTML files.
4. Client side navigation uses RSC payloads and JS chunks without additional server requests.
5. Static rendering is great for performance, especially in blogs, documentation and marketing pages.

### DYNAMIC RENDERING

1. Dynamic rendering is a server rendering strategy where routes are rendered uniquely for each user when they make a request.
2. It is useful when you need to show personlized data or information that's only available at request time(and not ahead of time during prerendering)- things like cookies or URL search parameters.
3. News websites, personalized shopping pages, and social media feeds are some examples where dynamic rendering is beneficial.

### How to dynamically render?

Next.js automatically switches to dynamic rendering for an entire route when it detects what we call a "dynamic function" or "dynamic API".
In Next.js, these dynamic functions are:

-   cookies()
-   headers()
-   connection()
-   draftMode()
-   searchParams prop
-   after()

Using any of above automatically opts your entire route into dynamically rendering at request time.

##### Build

1. run `npm run build` after deleting `.next` folder to build the project.
2. Check the logs. `f` indicator in front of route name indicates dynamically rendered.(Check the legend)
3. Dynamically rendered pages aren't generated at build time. So build will not have `.html` or `rsc payload` files.(Check .next folder).
4. Run `npm run start`, do `empty cache and hard reload` and go to `localhost:3000/about`. You will see the route(/about) in network tab. Still if you check in `.next` folder no html or rsc files for about route since we are building a new page for each request there is simply no need to store it.

##### DYNAMIC RENDERING SUMMARY

1. Dynamic rendering is a strategy where the HTML is generated at request time.
2. Next.js automatically enables it when it encounters dynamic functions like cookies, headers, connection, draftMode, after or searchParams prop.
3. Dynamic rendering is great for personalized content like social media feeds.
4. You don't have to stress about choosing between static and dynamic rendering.
5. Next.js automatically selects the optimal rendering strategy for each route based on the features and API's you're using.
6. If you want to force a route to be dynamically rendered, you can use the `export const dynamic = "force-dynamic"` config at the top of your page.

### generateStaticParams()

`generateStaticParams` is a function that works alongside dynamic route segments, to generate static routes during build time, instead of on demand at request time giving use a nice performance boost. It is powerful feature that lets you prerender static routes for dynamic segments

1.  If you have a dynamic routing( i.e [id] within a route), then if you build the app using `npm run build`, check the output of build.
2.  You will notice the `main route(eg. products)` and `dynamic route([id])` within are treated differently. `products` will be statically rendered and [id] will be dynamically rendered. In `.next` folder as well, you will find html file for products route and not for `[id]` route. Products details page([id]) is rendered on demand at request time.
3.  It would be great to tell Next.js to at least prerender the feature products list. This is where the generateStaticParams comes into picture.
4.  In products details page([id]), add the below function which returns an array of objects. Each object represents a route we want to prerender with object `key` corresponding to our route's dynamic segment([id]). This function runs during build time.
    export const generateStaticParams = async () => {
    // The below id's could also be fetched from an API.
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
    };
5.  Rebuild the application now and check the `build output` and `.next` folder. `/products/[id]` will now be static with all 3 routes(legend indicating `prerendered as static HTML(uses generateStaticParams)`). .next folder will have `1.html`, `2.html`, `3.html`(also separate `rsc files`).

##### Multiple dynamic route segments

Suppose we have a product catalog with categories and products eg `/products/[category]/[product]/page.tsx`

            export const generateStaticParams = async () => {
               // The below id's could also be fetched from an API.
               return [
                  { category: 'electronics', product: "smartphone" },
                  { category: 'electronics', product: "laptop" },
                  { category: 'books', product: "biography" },
                  { category: 'books', product: "science-fiction" }
               ];
            };

Multiple dynamic segments can really boost the application performance by ensuring that frequently accessed pages are prerendered and ready to serve instantly.

### dynamicParams

1. Considering the `generateStaticParams` scenario, what if the user routes to `localhost:3000/products/4` or `localhost:3000/products/5`.
2. It will work and Next.js will render(No 404 Page not found) those pages but not in advanced. Instead it statically renders them at run time.
3. `dynamicParams` control what happens when a dynamic segment is visited that was not generated with generateStaticParams()
4. By default, dynamicParams is set to true(so No 404 page not found). Next.js will statically render pages on demand for any dynamic segments not included in generateStaticParams().
5. We can forcefully set it to false, so Next.js will return a 404 error for any dynamic segments not included in out pre-rendered list.

##### When to use?

If you are building an e-commerce site, you'll probably want to keep dynamicParams set to true. This way, you can pre-render your most popular product pages for better performance, but still allow access to all your products- they'll just be rendered on demand.

##### When not to use?

If you're working with something like a blog where you have a smaller, more fixed no of pages, you can pre-render all of them and set dynamicParams to false. If someone tries to access a blog post that doesn't exists, they'll get a clean 404 error instead of waiting for a page that will never exist.

### STREAMING:

1. Streaming is a strategy that allows for progressive UI rendering from the server.
2. Work is broken down into smaller chunks and streamed to the client as soon as they're ready.
3. This means users can see parts of the page right away, without waiting for everything to load.
4. It's particularly powerful for improving initial page load times and handling UI elements that depend on slower data fetches, which would normally hold up the entire route.
5. Streaming comes built right into the `App Router` in Next.js.
6. Check `product-reviews` folder in rendering. We have 2 components `Product` and `Reviews` with delay of 2000(2 sec) and 4000(4 sec) to mimic data fetching. Now navigate to `localhost:3000/product-reviews` with dev server running. You will find the page loads after 6-8 seconds because it is fetching everything before sending anything(This seems/is similar to Suspense). We can improve this using streaming strategy of App Router.(Make use of `<Suspense></Suspense>`).

## SERVER AND CLIENT COMPOSITION PATTERNS:

1. `Server components`
    - fetching data
    - accessing backend resources directly
    - keeping sensitive information(like access tokens and API keys) secure on the server
    - handling large dependencies server-side- which means less JS for your users to download.
2. `Client components`
    - adding interactivity
    - handling event listeners(like onClick(), onChange(), etc)
    - managing state and lifecycle effects(using hooks like useState(), useEffect(), useReducer())
    - working with browser specific API's
    - implementing custom hooks
    - using react class components

### SERVER-ONLY CODE

1. Some code is specifically designed to run exclusively on the server. Think about modules or function that work with multiple libraries, handle environment variables, communicate directly with databases or process sensitive information.
2. Since Javascript modules can be shared between the client and server components, code meant for the server could accidentally find its way to the client.
3. This is bad news as it can bloat your JS bundle, expose secret keys, database queries and sensitive business logic.
4. It is very important to keep server-only code separate from client-side code.
5. Solution- `server-only` package. It throws a build-time error if someone accidentally imports server code into a client component.
6. Check the `utils/server-utils`, `server-route` and `client-route` implementation.
7. `server-only` package makes sures server functions doesn't sneek into client components.
8. Using `server-only` isn't only a good practise, it also improves security, performance and reliability. It helps enforce a separation making your application more robust and secure.

### THIRD PARTY PACKAGES

1. Server components have introduced an exciting new paradigm in React, and the ecosystem is evolving to keep up.
2. Third party packages are starting to add the `use client` directive to components that need client-side features, making it clear where they should run.
3. Many npm packages haven't made this transition yer.
4. This means while they work fine in client components, they might break or fail completely in server components.
5. Solution - We can wrap the third-party components that need client-side features in out own client component.

#### React slick slick-carousal Eg

1. Do `npm i react-slick slick-carousel @types/react-slick` and run the server again.
2. Add the playground example from react-slick into `client-route` and `server-route` components.
3. It will work in `client-route` component, but would throw error on `server-route` component.
4. This is due to the slider component uses client side features but the library itself doesn't include the `use client` directive.
5. What if make the server-route component to use `use client`. This would mean losing valuable server side capabilities like `database calls`, `access secret env variables`, etc.
6. To resolve this `we must encapsulate the third party components that depend on client only features within our own client component`. Check imageSlider in components.

#### Summary

1. Third party packages in the react ecosystem are in the transitional phase where numerous components from the npm packages haven't yet adopted the `use client` directive.
2. Wrapping such components in our own client components will allow us to leverage the ecosystem of third-party packages while adhering to the new server components model.

### CONTEXT PROVIDERS:

1. Context providers typically live near the root of an application to share global state and logic. For Eg your application theme.
2. However, `React context isn't supported in server components`.
3. If you try to create a context at your application's root, you'll run into an error.
4. The solution is to create your context and render its provider inside a dedicated client component.
5. Try adding context provider `Theme` into the layout. It won't work. Instead we add a `theme-provider` component and add that in layout(as wrapper) and make use in `client-route`.
6. Even though we are wrapping our application in a client component(ThemeProvider), server component further down the tree stay as server components.

### CLIENT-ONLY CODE

1. Just like how we need to keep certain operations server-side, it's equally crutial to keep some functionality strictly on the client side.
2. Client-only code works with browser-specific features- think `DOM manipulations`, `window object interactions` or `local storage operations`.
3. These features aren't available on the server, so we need to make sure suck code runs only on client side to avoid server-side rendering errors.
4. To prevent unintended server side usage of client side code, we can make use of a package called `client-only`.
5. Client only code needs to stay on client side not get used in server-side. `client-only` provides this safety net.
6. Similar to `server-only` but for client.
7. Check utils folder and `client-route` and `server-route`.

### CLIENT COMPONENT PLACEMENT

1. Since server components can't handle state and interactivity, we need client components to fill this gap.
2. `The key recommendation here is to position these client components lower in your component tree. Ideally making them leaf components(considering the tree heirarchy) in heirarchy`
3. `This is because if you make a component a client component using `use client` directive, all components below this will also be treated as client components.`
4. This means sending `more code to the browser` and `losing the benefits` of `server components`.
5. Consider the `landing-page` route which make use of `navbar` component.

### INTERLEAVING SERVER AND CLIENT COMPONENTS

1. Server component within another Server component.
2. Client component within another Client component.
3. Client component within another Server component.
4. Server component within another Client component. (`Will this work? No because every component embedded within client component is treated as client component. Check Client component placement`). This pattern is `not supported in Next.js`.
5. Try playing with `interleaving` route, `server-component-one`, `client-component-one`, `server-component-two`, `client-component-two`.
6. Work around for point 4 is `passing server-component as children within client component`.

#### RENDERING SECTION SUMMARY:

1. CSR
2. SSR
3. Suspense for SSR
4. RSC's
5. Server and Client components
6. RSC rendering lifecycle.
7. Static and dynamic rendering.
8. Streaming
9. Server and client composition patterns.

---

# 6. DATA FETCHING IN APP ROUTER

1. The App Router is built on React Server Components(RSC) architecture which gives us the flexibility to fetch data using either server components or client components.
2. However it' usually preferable to use server components for data operations because:
    - You can directly communicate with your databases and file systems on the server side.
    - You get better performance since you're closer to your data sources.
    - Your client-side bundle stays lean because the heavy lifting happens server-side.
    - Your sensitive operations and API keys remain secure on the server.

### Data fetching on client side

1. Exactly same as we do it react.
2. We should only use client components for data fetching when we absolutely need to.
3. Like real time updates or data depends on client side interactions that we can't predict on server side.
4. For everything else the recommended way is to fetch data on server components.
5. Check the `users-client` route. Make use of API's from `Json placeholder` for mock data.(`https://jsonplaceholder.typicode.com/`)

### Data fetching on server side:

1. The RSC architecture supports `async` and `await` keywords in server components.
2. This means we can write our data fetching code just like `regular Javascript`, using `async` functions coupled with the `await` keyword.
3. Data fetching in server components is much easier than client components. Just `async` and `await`, no `useState`, no`useEffect` and no state management complexities that we usually deal with.(What about loading and error states?)

#### REQUEST MEMOIZATION:

![title](public/request-memoization.png)

1. In Next.js applications, we will often end up fetching same data in multiple places. Consider above image, where `Request B` appears across 6 different components in out tree to load a single route.
2. We might wonder this would trigger multiple network requests for the same data, but react cleverly handles this using feature called `Request memoization`. React will de-duplicate the fetch requests with same URL and options.
3. This means you can fetch data whenever you need it in your component tree without worrying about duplicate network requests.
4. React will only make the actual fetch once and reuse the result for subsequent calls during the same render pass.
5. `Request memoization is a React feature and thereby included in Next.js.`
6. It let's you write data-fetching code exactly where you need it rather than having to centralize fetches and pass data down through props.

### LOADING AND ERROR STATES:

1. While client components require you to manage the loading and error states with separate variables and conditional renderingm server components make this process much cleaner.
2. To implement a `loading` state, all we need to do is define and export a react component in `loading.tsx`.
3. To implement a `error` state, all we need to do is define and export a react component in `error.tsx`.
4. `error.tsx` is always for a `client component`.

### DATA FETCHING PATTERNS:

1. `Sequential` - Requests in a component tree are dependent on each other. This can lead to longer loading times. Check `posts-sequential` folder where we fetch all posts and for each post, fetch author using userId property.
2. `Parallel` - Requests in a route are eagerly initiated and will load data at the same time. This reduces the total time it takes to load data. Check `users-parallel` example.

### FETCHING DATA FROM A DATABASE

1. Two key reasons why fetching data directly from a database is powerful
    - Server components have direct access to `server-side resources`, which makes `database interactions seamless`.
    - Since `everything happens on the server`, we don't need `API routes` or worry about `exposing sensitive information to the client`.
2. We azre going to use `SQLite` and `Prisma`.
3. `SQLITE` - A simple, `file-based database` to store information in your project. It `doesn't require a server` or a `complex setup` and it's perfect for `learning` and `prototyping`.
4. `Prisma` - A tool that makes it really easy to `talk to your database`. `It's like a translator that helps your code communicate with SQLLite`.
   a. To install prisma do `npm install prisma -d`(Yes save it as dev dependency)
   b. Next do `npx prisma init --datasource-provider sqlite`. This will create a `prisma` directory with `schema.prisma` file.
   c. In schema.prisma file update the url as `file:app.db` and also add it to `.gitignore`.
   d. Next, add the products model in `schema.prisma` file. Products model represents the Product table in DB.
   e. Next is to perform migration using `npx prisma migrate dev --name init`. This command does 3 things
    - Creates a `migration` file in `prisma/migrations` folder.
    - Executes the migration against your database.
    - Installs the `prisma/client` package and generates the prisma client for interactions.
      f. Now the database and tables are ready.

### DATA MUTATIONS:

Check the react-form code to understand the basic way the form handling was done in React. Having states for data, onChange handlers for data, loading state, etc. But there is a better way i.e `Server Actions`.

### SERVER ACTIONS

1. `Server actions` are asynchronous functions that are executed on the server.
2. They can be called in Server and Client components to handle `form submissions` and `data mutations` in Next.js applications
3. You should use `server actions` when you
    - `Need to perform secure database operations`.
    - `Want to reduce API boilerplate code`.
    - `Need progressive enhancement for forms`.
    - `Want to optimize for performance`.
4. A server action can be defined with the React "use server" directive.
5. You can place the directive
    1. `At the top of an async function to mark the function as server action`.
    2. `At the top of a separate file to mark all exports of that file as server actions`.
6. Benefits:
    1. Simplefied code - They dramatically simplify your code as there is no need for separate API routes or client-side state management for form data.
    2. Improved security - They booset security by keeping sensitive operations server-side, away from potential threats.
    3. Better performance- They improve performance because there's less JS running on the client, leading to faster load times and better code web vitals.
    4. Progressive enhancement - Forms keep working even if JS is turned off in the browser - making your apps more accessible and resilient.
7. Check `products-db-create` and compare it with `react-form` folder. Both features adding Product and displaying a list(navigating to product-db).

### PENDING STATES WITH useFormStatus

1.  `useFormStatus()` is a React hook that gives us status information about the last form submission.

         const status = useFormStatus();

2.  `useFormStatus()` provides
    -   `pending`: a boolean that indicates if the parent<form> is currently submitting.(disable submit button)
    -   `data`: An object containing the form's submission data.
    -   `method` : a string(either `get` or `post`) showing the HTTP method being used.
    -   `action`: A reference to the function that was passed to the parent <form>'s action prop.

### FORM VALIDATION WITH useActionState

1. `useActionState()` is a React hook that allows us to update state based on the result of a form action. It is particularly helpful for handling form validation and error messages.
2. `useActionState()` takes 2 params, i.e `serverAction` and `initialFormState`.
3. `useActionState()` returns 3 values, i.e `state`(current formState), `formAction`, `isPending`(Boolean, action is currently being executed or not)
4. Check the `products-db-create` folder.
5. What about using useActionState in server component. Next.js will not allow(Hooks are not allowed in Server Component). When we try to create a `serverAction` in a client component, Next.js will not allow it. So what is the solution?

### SEPARATING SERVER ACTIONS:

1. The trick to point 5 in FORM VALIDATIONS is to keep the serverActions into its own separate file, keeping out server side logic cleanly separated from client side components.
2. Check `src/actions/products.ts` where all serverAction code is moved from `products-db-create.tsx`.

### useFormStatus Vs useActionState:

1. Both the hooks help us determine if a form is being submitted and let us disable the submit button- but there's an interesting difference between them.
2. The pending state from `useFormStatus()` is specifically for form submissions.
3. `isPending` from `useActionState()` can be used with any action, not just form submissions.
4. Go with `pending` from `useFormStatus()` when you're building `reusable components that are meant to live inside forms`. For Example, `submit buttons` or `loading spinners` that you'll want to use across different forms in your application.
5. Choose `isPending` from `useActionState()` when you need to keep track of server actions that aren't necessarily related to form submissions. It gives you that extra flexibility.

`JS NOTE: ?? is called nullish coalescing operator`

### updateServerAction

Too many things here. Check the video 79.

### deleteServerAction

Too many things here. Check the video 80.

### useOptimistic() Hook

1. `useOptimistic()` is a react hook that provides a way to `optimistically update the UI while an asynchronous action is underway`.
2. This technique helps make our apps feel more responsive, especially when working with forms.
3. Instead of making users wait for server responses, we can show them the expected result right away.
4. Using this hook for our delete operation, the item will get deleted instantly on UI for smooth user experience while the request is still not completed(which will complete at a later point).
5. Check products-db.tsx for more info.

### FORM COMPONENT

1. It is built on top of the HTML form element(extends)
2. Comes with some powerful features that make it perfect for modern web applications:

    1. It automatically prefetches the loading UI.
    2. It handles client-side navigation on form submission
    3. It provides progressive enhancement out of the box.

3. Points to note
    1. When the Form component become visible, it prefetches the loading UI associated with `products-db` route.(This is the value of the actions prop)
    2. When a user submites the search, it instantly navigates to the products page client-side and the form data gets turned into URL params.(For eg `?query=product+3)`).
    3. It will show the loading state while the search results are being fetched.
    4. Once the data is ready, the results are displayed on the UI.
4. Form component supports progressive enhancement out of the box(Even without javascript the form will still work as a regular HTML form)
5. BENEFITS:
    1. `Gives really a smooth user experience with minimal effort on our path`.
    2. `It handles all the complex parts of form submission`, `navigation` and `loading states` letting us `focus on building features` rather than dealing with Messy code like `prevent default, manual state management or any of that old school form handling stuff`.
    3. `Form component` also supports `server actions`.

### DATA FETCHING AND MUTATIONS SUMMARY:

1. Fetch data in client components
2. Fetch data in server components with async/await.
3. Handling loading and error states with loading.tsx and error.tsx.
4. Fetching data directly from the database.
5. Server actions for data mutations.
6. Feedback with useFormStatus and useActionState hook
7. Separating server actions for use in client components.
8. Pass additional data to perform update and delete operations.
9. Perform optimistic updates
10. Form Component.

## AUTHENTICATION

1. Most apps revolve around users.
2. When building for users, we need to consider three fundamental concepts:
    1. `Identity` -Verifying who someone is through authentication
    2. `Sessions` - Keep track of users logged-in state across requests.
    3. `Access` - Controls what they can do
3. In developer terms, we call these `authentication`, `session management` and `authorization`.
4. With react single page apps, you're only dealing with client-side code.
5. With Next.js, you've got to protext your app from these three different angles: `client-code`, `server-side` and `API routes`.
6. During authentication we have to provide with following
    1. Let users sign up.
    2. Give them a way to sign in.
    3. Enable them to manage their account(password changes, email update, etc)
    4. Show or hide UI elements based on whether they're logged in.
    5. Protect certain routes depending on authentication status.
    6. Access session and user data when needed.
    7. Set up role-based access control(admin, editor, viewer and so on)
    8. Provide a way to sign out.
7. So it pretty much work to perform above, so Next js themselves recommend to use an authentication library. Docs clearly states
   "While you can implement a custom auth solution, for increased security and simplicity, we recommend using an authentication library".

### READ SESSION AND USER DATA:

1. Two helper functions from clerk: `auth()` and `currentUser()` from `clerk/nextjs/server`. Only works on server components.
2. On client components we can user `useAuth()` and `useUser()` hooks from `clerk/nextjs/client`.
3. Check Dashboard folder for more info.

### USER ROLES AND PERMISSIONS

1. Most apps need more than just checking if someone's logged in or not.
2. They need different permission levels for different users.
3. How to implement `role-based access control`(RBAC) using Clerk.
4. Configure Session token
    1. Clerk gives us something called user metadata, which is like a storage space for extra user information.
    2. We'll use it to store user roles.
    3. publicMetadata because it's read-only in the browser, making it super secure for storing sensitive information like user roles.
    4. To build basic RBAC system, we need to make sure this publicMetadata is readily available in the session token,
    5. We can quickly check user roles without having to make extra network requests every time we need this information.

### USER ROLE MANAGEMENT

1. Check `admin/actions.ts` for more info.

### DEPLOYMENT

1. Vercel to make deploy.
