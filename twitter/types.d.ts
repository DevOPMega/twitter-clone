type User = {
    status: string,
    data: [
        {
            user: {
                email: string,
                userId: string,
                username: {
                    firstName: string,
                    lastName: string
                }
            }
        }
    ]

}