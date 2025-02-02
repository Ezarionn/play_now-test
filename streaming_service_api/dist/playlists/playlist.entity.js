"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const song_entity_1 = require("../songs/song.entity");
const swagger_1 = require("@nestjs/swagger");
let Playlist = class Playlist {
};
exports.Playlist = Playlist;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'Id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Playlist.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Name' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Playlist.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: 'Created at' }),
    (0, typeorm_1.CreateDateColumn)({ type: Number }),
    __metadata("design:type", Date)
], Playlist.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User, description: 'Owner' }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.playlists, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Playlist.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [song_entity_1.Song], description: 'Songs' }),
    (0, typeorm_1.ManyToMany)(() => song_entity_1.Song, (song) => song.playlists, { eager: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Playlist.prototype, "songs", void 0);
exports.Playlist = Playlist = __decorate([
    (0, typeorm_1.Entity)()
], Playlist);
//# sourceMappingURL=playlist.entity.js.map