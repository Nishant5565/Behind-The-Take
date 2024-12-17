"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// ! this file is just being used to seed the database with some initial data
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = [
            { name: "Acting" },
            { name: "Photography" },
            { name: "Dance" },
            { name: "All" },
        ];
        for (const category of categories) {
            yield prisma.category.create({
                data: category,
            });
        }
        const jobs = [
            {
                title: "Lead Actor",
                company: "DreamWorks",
                location: "Los Angeles, CA",
                salary: "$100,000/year",
                featured: true,
                categoryId: 1,
            },
            {
                title: "Photographer",
                company: "National Geographic",
                location: "New York, NY",
                salary: "$80,000/year",
                featured: true,
                categoryId: 2,
            },
            {
                title: "Choreographer",
                company: "Broadway",
                location: "Chicago, IL",
                salary: "$75,000/year",
                featured: true,
                categoryId: 3,
            },
        ];
        for (const job of jobs) {
            yield prisma.job.create({
                data: job,
            });
        }
        console.log("Seeding completed!");
    });
}
main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
