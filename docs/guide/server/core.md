---
title: 服务端
createTime: 2026/06/30 15:59:04
permalink: /guide/server/core/
icon: lets-icons:server-fill
---

## 分支关系图

### Java 服务端分支

```
├─ Mojang 官方服务器
│   └─ hMod
│       ├─ Bukkit API
│       └─ CraftBukkit
│           └─ Spigot
│               ├─ Paper
│               │   ├─ Tuinity (已合并回 Paper)
│               │   │   └─ Yatopia (激进优化，停更)
│               │   │       └─ Airplane (基于 Tuinity/Paper/Purpur，最终停更 → Pufferfish)
│               │   ├─ Purpur
│               │   ├─ Pufferfish (整合 Airplane 特性)
│               │   ├─ Gale
│               │   │   └─ Leaf
│               │   ├─ Mirai
│               │   ├─ Petal
│               │   ├─ Folia
│               │   │   └─ Lumina (缺乏活跃的开发者，已被暂停)
│               │   ├─ MultiPaper
│               │   ├─ Akarin (1.12.2 多线程，停更)
│               │   ├─ Leaves
│               │   └─ 其他 (SportPaper, NachoSpigot 等，停更)
│               ├─ Torch (1.12.2，停更)
│               ├─ TacoSpigot (1.8，停更)
│               ├─ BungeeCord (代理)
│               │   ├─ Waterfall
│               │   │   ├─ FlameCord
│               │   │   └─ Travertine (停更)
│               │   ├─ HexaCord (停更)
│               │   └─ NullCord (停更)
│               └─ Velocity (代理)
│                   └─ Gate
├─ 混合服务端 (Forge/NeoForge + Bukkit)
│   ├─ Cauldron / MCPC+ (1.5-1.6.4)
│   │   └─ KCauldron (1.7.10)
│   │       └─ Thermos
│   │           ├─ Contigo
│   │           ├─ Uranium
│   │           └─ Crucible
│   ├─ CatServer (1.12.2)
│   │   └─ LoliServer
│   ├─ Mohist (1.12.2/1.16.5)
│   │   └─ Magma (1.18+)
│   ├─ Arclight (1.16+, NeoForge)
│   └─ Cardboard (Fabric+Bukkit，停更)
├─ Sponge 生态
│   ├─ SpongeAPI
│   │   ├─ SpongeVanilla
│   │   │   └─ Lantern (独立实现，停更)
│   │   └─ SpongeForge
├─ Mod 加载器服务端
│   ├─ Forge → NeoForge
│   ├─ Fabric → Quilt
│   └─ LiteLoader (已过时)
└─ 完全独立实现
    ├─ Spacecraft → Glowstone
    ├─ Minestom
    ├─ MCServer → Cuberite (C++)
    ├─ TrueCraft
    └─ SharpMC / Obsidian (C#)
```

### 基岩版服务端分支

```
├─ 官方 BDS
│   ├─ LiteLoaderBDS (已弃用)
│   └─ LeviLamina
├─ PocketMine 系 (PHP)
│   └─ PocketMine-MP
│       ├─ Genisys → ClearSky
│       ├─ ImagicalMine
│       ├─ Altay
│       ├─ Steadfast2
│       └─ 其他停更分支 (Xenon, TurboMine)
├─ Nukkit 系 (Java)
│   └─ Nukkit
│       └─ NukkitX / Cloudburst
│           ├─ PowerNukkit → PowerNukkitX
│           └─ PetterM1 版 (停更)
└─ 其他语言实现
    ├─ MiNET (C#)
    ├─ Dragonfly (Go)
    ├─ GoMint (Go)
    ├─ PocketNode (Node.js)
    └─ Bedrock.js (JavaScript)
```