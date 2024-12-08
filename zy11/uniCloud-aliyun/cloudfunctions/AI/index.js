const axios = require('axios');

exports.handler = async (event, context) => {
    const url = "https://spark-api-open.xf-yun.com/v1/chat/completions";
    const data = {
        max_tokens: 4100,
        top_k: 4,
        temperature: 0.5,1
        messages: [
            {
                role: "system",
                content: "你是一位中医行业专家,目标任务,请根据我给出的行业名称，为病人提供正确的调理身体的方法，给出相应的措施；同时为中医爱好者回答养生方面的问题，给出养生小建议。风格设定,专业严谨、条理清晰。"
            },
            {
                role: "user",
                content: "我最近头不太舒服是为什么"
            }
        ],
        model: "4.0Ultra",
        tools: [
            {
                function: {
                    name: "天气查询",
                    description: "天气插件可以提供天气相关信息。你可以提供指定的地点信息、指定的时间点或者时间段信息，来精准检索到天气信息。",
                    parameters: {
                        type: "object",
                        properties: {
                            date: {
                                description: "日期",
                                type: "string"
                            },
                            location: {
                                description: "地点，比如北京。",
                                type: "string"
                            }
                        },
                        required: ["location"]
                    }
                },
                type: "function"
            }
        ],
        stream: true
    };
    const headers = {
        "Authorization": "Bearer ZOwXJhlPHCbXWpUkhVVo:FwiWdLkCulPBRuGfGfin",
        "Content-Type": "application/json"
    };

    try {
        const response = await axios.post(url, data, { headers, responseType: 'stream' });

        response.data.on('data', (chunk) => {
            console.log(chunk.toString('utf8'));
        });

        response.data.on('end', () => {
            console.log('No more data in response.');
        });

        // 注意：对于Lambda等环境，你可能需要处理超时和内存限制。
        // 如果响应是长时间流式传输的，你可能需要设置一个超时或限制处理的数据量。

    } catch (error) {
        console.error('Error making request:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    // 对于Lambda，通常你需要返回一个对象来指定状态码和响应体。
    // 但由于我们在这里处理的是流，我们可能不会在函数结束时立即有完整的响应体。
    // 因此，你可能需要根据你的需求调整这个返回逻辑。
    // 例如，你可能想要返回一个状态码来表示函数已经成功开始处理请求。
    return { statusCode: 200, body: 'Request sent successfully' };

    // 注意：上面的返回逻辑可能不适用于你的用例，因为流式响应通常意味着你不会立即有一个完整的响应体来返回。
    // 你可能需要根据你的具体需求来调整这个部分。
};const axios = require('axios');

exports.handler = async (event, context) => {
    const url = "https://spark-api-open.xf-yun.com/v1/chat/completions";
    const data = {
        max_tokens: 4100,
        top_k: 4,
        temperature: 0.5,1 
        messages: [
            {
                role: "system",
                content: "你是一位中医行业专家,目标任务,请根据我给出的行业名称，为病人提供正确的调理身体的方法，给出相应的措施；同时为中医爱好者回答养生方面的问题，给出养生小建议。风格设定,专业严谨、条理清晰。"
            },
            {
                role: "user",
                content: "我最近头不太舒服是为什么"
            }
        ],
        model: "4.0Ultra",
        tools: [
            {
                function: {
                    name: "天气查询",
                    description: "天气插件可以提供天气相关信息。你可以提供指定的地点信息、指定的时间点或者时间段信息，来精准检索到天气信息。",
                    parameters: {
                        type: "object",
                        properties: {
                            date: {
                                description: "日期",
                                type: "string"
                            },
                            location: {
                                description: "地点，比如北京。",
                                type: "string"
                            }
                        },
                        required: ["location"]
                    }
                },
                type: "function"
            }
        ],
        stream: true
    };
    const headers = {
        "Authorization": "Bearer ZOwXJhlPHCbXWpUkhVVo:FwiWdLkCulPBRuGfGfin",
        "Content-Type": "application/json"
    };

    try {
        const response = await axios.post(url, data, { headers, responseType: 'stream' });

        response.data.on('data', (chunk) => {
            console.log(chunk.toString('utf8'));
        });

        response.data.on('end', () => {
            console.log('No more data in response.');
        });

        // 注意：对于Lambda等环境，你可能需要处理超时和内存限制。
        // 如果响应是长时间流式传输的，你可能需要设置一个超时或限制处理的数据量。

    } catch (error) {
        console.error('Error making request:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    // 对于Lambda，通常你需要返回一个对象来指定状态码和响应体。
    // 但由于我们在这里处理的是流，我们可能不会在函数结束时立即有完整的响应体。
    // 因此，你可能需要根据你的需求调整这个返回逻辑。
    // 例如，你可能想要返回一个状态码来表示函数已经成功开始处理请求。
    return { statusCode: 200, body: 'Request sent successfully' };

    // 注意：上面的返回逻辑可能不适用于你的用例，因为流式响应通常意味着你不会立即有一个完整的响应体来返回。
    // 你可能需要根据你的具体需求来调整这个部分。
};