import express from "express";

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstname: 'John', lastname: 'Doe'},
        {id: 2, firstname: 'Mary', lastname: 'Smith'},
        {id: 3, firstname: 'Lillith', lastname: 'Swanson'},
    ]
    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));