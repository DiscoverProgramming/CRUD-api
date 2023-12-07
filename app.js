// @ts-check

const express = require('express');
const app = express();
app.use(express.json());

let data = []; // This is a simple in-memory data store. Replace it with real database for production applications.

// Create API
app.post('/api', (req, res) => {
    data.push(req.body);
    res.status(201).send(req.body);
});

// Read API
app.get('/data', (req, res) => {
    res.send(data);
});

// Update API
app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = data.find(i => i.id === id);
    if (item) {
        Object.assign(item, req.body);
        res.send(item);
    } else {
        res.status(404).send();
    }
});

// Delete API
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(i => i.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).send()
    } else {
        res.status(404).send()
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));