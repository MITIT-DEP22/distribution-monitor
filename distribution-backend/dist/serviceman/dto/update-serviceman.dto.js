"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServicemanDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_serviceman_dto_1 = require("./create-serviceman.dto");
class UpdateServicemanDto extends (0, swagger_1.PartialType)(create_serviceman_dto_1.CreateServicemanDto) {
}
exports.UpdateServicemanDto = UpdateServicemanDto;
//# sourceMappingURL=update-serviceman.dto.js.map