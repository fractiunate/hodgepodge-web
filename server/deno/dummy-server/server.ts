Deno.serve({ port: 4242 }, (_req) => {
  // ⚠Caution
  // Be aware that the req.text() call can fail if the user hangs up the connection before the body is fully received. Make sure to handle this case. Do note this can happen in all methods that read from the request body, such as req.json(), req.formData(), req.arrayBuffer(), req.body.getReader().read(), req.body.pipeTo(), etc.
  //
  //  console.log("Method:", req.method);

  // const url = new URL(req.url);
  // console.log("Path:", url.pathname);
  // console.log("Query parameters:", url.searchParams);

  // console.log("Headers:", req.headers);

  // if (req.body) {
  //   const body = await req.text();
  //   console.log("Body:", body);
  // }
  const body = JSON.stringify({ message: "NOT FOUND" });
  return new Response(body, {
    status: 404,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
});
