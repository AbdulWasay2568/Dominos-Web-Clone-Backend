"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.OrderStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["CUSTOMER"] = "CUSTOMER";
    Role["VENDOR"] = "VENDOR";
})(Role || (exports.Role = Role = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["FAILED"] = "FAILED";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
