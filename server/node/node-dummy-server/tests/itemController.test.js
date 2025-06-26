"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemController_1 = require("../src/controllers/itemController");
const item_1 = require("../src/models/item");
describe('Item Controller', () => {
    it('should return an empty array when no items exist', () => {
        // Create mock objects for Request, Response, and NextFunction
        const req = {};
        const res = {
            json: jest.fn(),
        };
        // Ensure that our in-memory store is empty
        item_1.items.length = 0;
        // Execute our controller function
        (0, itemController_1.getItems)(req, res, jest.fn());
        // Expect that res.json was called with an empty array
        expect(res.json).toHaveBeenCalledWith([]);
    });
});
