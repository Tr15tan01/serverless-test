exports.handler = async (event, context) => {
    const res = { ame: "This is fitst serverless function" }
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: JSON.stringify(res)
    }
}