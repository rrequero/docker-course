const Koa = require('koa');
const views = require('koa-views');
const mongoose = require('mongoose');


const CountModel = require('./models/count.model');


const mongoUri = `mongodb://${process.env.MONGO_HOST || 'mongo'}:27017/count`;


mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error(err);
    }
});

const app = new Koa();

app.use(views(__dirname + '/views', {
    map: {
        ejs: 'ejs'
    }
}));

app.use(async (ctx) => {
    // inserting new one
    const count = new CountModel();
    await count.save();
    const times = await CountModel.countDocuments();
    await ctx.render('index.ejs', {
        count: times
    });
});

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.error('Error', err);
        process.exit(1);
    }
    console.log(`Server listening in port ${process.env.port || 3000}`);
})