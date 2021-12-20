const expressCallback = (controller: (request: any) => Promise<object>) => {
  return (req: any, res: any) => {
    const request = {
      body: req.body,
      query: req.query,
      url: req.url,
      path: req.path,
      method: req.method,
      headers: {
        'Content-Type': req.get('Content-Type'),
        'User-Agent': req.get('User-Agent')
      }
    };

    controller(request)
      .then((response: any) => {
        if(response.headers) res.set(response.headers);
        res.type('json');
        res.status(response.statusCode).send(response.body);
      })
      .catch((err: any) => res.status(err.statusCode).send({ error: err }));
  };
};

export default expressCallback;