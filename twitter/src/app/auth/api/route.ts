export async function POST(req: Request) {
    const response = await fetch("http://localhost:5500/api/v1/auth/login", {
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(f)
    });


}