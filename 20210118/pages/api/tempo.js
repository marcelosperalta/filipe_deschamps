async function tempo(request, response) {

    // variável de ambiente
    const apiSecret = process.env.CONVERTKIT_API_SECRET;

    await fetch(`https://api.convertkit.com/v3/subscrivers?api_secret=${apiSecret}`);
    = await subscriversResponse.json();
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;