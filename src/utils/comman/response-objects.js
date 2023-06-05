const InternalServerErrorResponse = (error) => {
    return {
        message : "Something went wrong",
        err : error,
        data : {},
        success : false
    }
}

const CustomErrorResponse = (error) => {
    if(!error.message && !error.explanation){
        return InternalServerErrorResponse(error);
    }

    return {
        message : error.message,
        err : error.explanation,
        data : {},
        success  : false
    }
}

export {
    InternalServerErrorResponse,
    CustomErrorResponse
}