class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data
    }
}

try {
    const name = 'Anderson';

const myError = new CustomError ({message: 'Custom message on custom error', data: {
    type: 'Server error'
}
});

throw myError;
}    catch (err) {
    console.log('Error: ', err);
    console.log(err.data);
}   finally {
    console.log ('Keep going...');
}