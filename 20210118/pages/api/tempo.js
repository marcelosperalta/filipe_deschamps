async function tempo(request, response) {

    // // variável de ambiente
    // // criar um arquivo ".env" na raiz do projeto e colocar o valor da variável "CONVERTKIT_API_SECRET" nesse arquivo
    // // exemplo: CONVERTKIT_API_SECRET=password
    // const apiSecret = process.env.CONVERTKIT_API_SECRET;

    const dynamicDate = new Date();

    // const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscrivers?api_secret=${apiSecret}`);
    // const subscribersResponseJson = await subscribersResponse.json();
    // const inscritos = subscribersResponseJson.total_subscribers;

    // // vercel configuration
    // response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        // inscritos: inscritos
    })
}

export default tempo;