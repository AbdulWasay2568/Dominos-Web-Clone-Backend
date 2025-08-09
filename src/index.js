"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const client_1 = require("@prisma/client");
const routes_1 = require("./apis/routes");
// Load env vars only in dev
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config({ path: '.env' });
}
exports.prismaClient = (_a = global.prismaClient) !== null && _a !== void 0 ? _a : new client_1.PrismaClient({
    log: ['query', 'error', 'warn'],
});
if (process.env.NODE_ENV !== 'production')
    global.prismaClient = exports.prismaClient;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
}));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Ecommerce backend is running on Vercel!');
});
app.use('/products', routes_1.productRouter);
app.use('/categories', routes_1.categoryRouter);
app.use('/addons', routes_1.addonsRouter);
app.use('/addon-options', routes_1.addonOptionsRouter);
app.use('/carts', routes_1.cartRouter);
app.use('/cart-items', routes_1.cartItemRouter);
app.use('/order-items', routes_1.orderItemRouter);
app.use('/favourites', routes_1.favouritesRouter);
app.use('/orders', routes_1.orderRouter);
app.use('/payments', routes_1.paymentRouter);
app.use('/product-reviews', routes_1.productReviewRouter);
app.use('/shipping-info', routes_1.shippingInfoRouter);
app.use('/users', routes_1.usersRouter);
app.use('/addresses', routes_1.addressRouter);
app.use('/auth', routes_1.authRouter);
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}
exports.default = (0, serverless_http_1.default)(app);
