"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMilitaryBaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_military_base_dto_1 = require("./create-military-base.dto");
class UpdateMilitaryBaseDto extends (0, swagger_1.PartialType)(create_military_base_dto_1.CreateMilitaryBaseDto) {
}
exports.UpdateMilitaryBaseDto = UpdateMilitaryBaseDto;
//# sourceMappingURL=update-military-base.dto.js.map