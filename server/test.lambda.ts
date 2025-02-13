import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from 'aws-lambda';

export const lambdaHandler = async (
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {

    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "geht",
        }),
    };
};