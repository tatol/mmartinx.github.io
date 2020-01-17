var perks = [
    {
        special: 'st',
        label: 'STRENGTH',
        labelRU: 'Сила',
        perks: [
            {
                rank: 1,
                name: 'IronFist',
                label: 'Iron Fist',
                labelRU: 'Железный кулак',
                img: 'iron-fist.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Channel your chi to unleash devastating fury! Punching attacks now do 20% more damage.',
                        labelRU: 'Преобразуйте энергию ци в неукротимую ярость! Удары кулаками наносят на 20 % больший урон.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        label: 'Punching attacks now do 40% more damage and can disarm your opponent.',
                        labelRU: 'Удары кулаками наносят на 40 % больший урон и могут разоружить противника.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        label: 'Punching attacks now do 60% more damage. Unarmed Power Attacks have a chance to cripple one of your opponent\'s limbs.',
                        labelRU: 'Удары кулаками наносят на 60 % больший урон. Мощные атаки без оружия могут повредить конечность противника.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        label: 'Attacks made with fists or weapons worn on the hands 80% more damage. Unarmed Power Attacks have an increased chance to cripple one of your opponent\'s limbs.',
                        labelRU: 'Рукопашные атаки наносят на 80 % больше урона. Безоружные Силовые атаки получают повышенный шанс повредить одну из конечностей противника.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        label: 'Attacks made with fists or weapons worn on the hands inflict 100% more damage. Criticals in V.A.T.S. will paralyse your opponents.',
                        labelRU: 'Удары кулаками наносят удвоенный урон. Критические попадания в V.A.T.S. парализуют противников.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'BigLeagues',
                label: 'Big Leagues',
                labelRU: 'Высшая лига',
                img: 'big-leagues.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Swing for the fences! Do 20% more melee weapon damage.',
                        labelRU: 'Бей со всей силы! Оружие ближнего боя наносит на 20 % больший урон.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        label: 'You now do 40% more melee weapon damage and gain a chance to disarm your opponent.',
                        labelRU: 'Холодное оружие наносит на 40 % больший урон и дает шанс разоружить врага.'
                    },
                    {
                        rank: 3,
                        level: 15,
                        label: 'You now do 60% more melee weapon damage and gain an increased chance to disarm your opponent.',
                        labelRU: 'Холодное оружие наносит на 60 % больший урон и имеет повышенный шанс разоружить врага.'
                    },
                    {
                        rank: 4,
                        level: 27,
                        label: 'You now do 80% more melee weapon damage and hit all targets in front of you.',
                        labelRU: 'Холодное оружие наносит на 80 % больший урон и позволяет одновременно атаковать всех врагов перед вами.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        label: 'You now do double damage with a melee weapon, and gain a chance to cripple your opponent, or grand slam their head clean off!',
                        labelRU: 'Холодное оружие наносит вдвое больший урон и дает шанс нанести увечье противнику или отрубить ему голову одним ударом!'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Armorer',
                label: 'Armorer',
                labelRU: 'Оружейник',
                img: 'armorer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Protect yourself from the dangers of the Wasteland with access to base level and Rank 1 armor mods.',
                        labelRU: 'Защитите себя от опасностей Пустошей с доступом к базовым и первоуровневым модификациям брони.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        label: 'You gain access to Rank 2 armor mods',
                        labelRU: 'Вы можете использовать модификации брони 2 уровня.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        label: 'You gain access to Rank 3 armor mods',
                        labelRU: 'Вы можете использовать модификации брони 3 уровня.'
                    },
                    {
                        rank: 4,
                        level: 39,
                        label: 'You gain access to Rank 4 armor mods',
                        labelRU: 'Вы можете использовать модификации брони 4 уровня.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Blacksmith',
                label: 'Blacksmith',
                labelRU: 'Кузнец',
                img: 'blacksmith.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Fire up the forge and gain access to base level and Rank 1 melee weapon mods.',
                        labelRU: 'Куйте железо, пока горячо получив доступ к базовым и первоуровневым модификациям оружия ближнего боя.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        label: 'You gain access to Rank 2 melee weapon mods',
                        labelRU: 'Вы можете использовать модификации оружия ближнего боя 2 уровня.'
                    },
                    {
                        rank: 3,
                        level: 29,
                        label: 'You gain access to Rank 3 melee weapon mods',
                        labelRU: 'Вы можете использовать модификации оружия ближнего боя 3 уровня.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'HeavyGunner',
                label: 'Heavy Gunner',
                labelRU: 'Фанат больших пушек',
                img: 'heavy-gunner.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Thanks to practice and conditioning, heavy guns do 20% more damage.',
                        labelRU: 'Физическая и стрелковая тренировки приносят свои плоды. Тяжелое оружие наносит на 20 % больший урон.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        label: 'Heavy guns now do 40% more damage, and have improved hip fire accuracy.',
                        labelRU: 'Тяжелое оружие наносит на 40 % больший урон. Повышенная точность стрельбы от бедра.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        label: 'Heavy guns now do 60% more damage. Hip fire accuracy is increased even more.',
                        labelRU: 'Тяжелое оружие наносит на 60 % больший урон. Еще более высокая точность стрельбы от бедра.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        label: 'Heavy guns now do 80% more damage and have a chance to stagger your opponent.',
                        labelRU: 'Тяжелое оружие наносит на 80 % больший урон и дает шанс ошеломить противника.'
                    },
                    {
                        rank: 5,
                        level: 47,
                        label: 'Heavy guns now do double damage.',
                        labelRU: 'Тяжелое оружие наносит в два раза больше урона.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'StrongBack',
                label: 'Strong Back',
                labelRU: 'Крепкий хребет',
                img: 'strong-back.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'What are you, part pack mule? Gain +25 to carry weight',
                        labelRU: 'У вас что, мулы в родне? +25 к переноске грузов.'
                    },
                    {
                        rank: 2,
                        level: 10,
                        label: 'You now have +50 to carry weight.',
                        labelRU: '+50 к переноске грузов'
                    },
                    {
                        rank: 3,
                        level: 20,
                        label: 'When overencumbered, you can use Action Points to run.',
                        labelRU: 'Персонаж может бегать при превышении максимального веса, расходуя очки действия.'
                    },
                    {
                        rank: 4,
                        level: 30,
                        label: 'When overencumbered, you can fast travel.',
                        labelRU: 'Быстрое путешествие доступно при превышении максимального веса.'
                    },
                    {
                        rank: 5,
                        level: 40,
                        label: 'When overencumbered, running costs 50% less action points.(Far Harbor DLC)',
                        labelRU: 'Когда вы перегружены, расход очков действия на бег на 50% меньше.(Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 7,
                name: 'SteadyAim',
                label: 'Steady Aim',
                labelRU: 'Твёрдая рука',
                img: 'steady-aim.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Stay on target! Hip-fire accuracy is improved when firing any gun.',
                        labelRU: 'Бейте точно в цель! Повышение точности стрельбы от бедра из всех видов оружия.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        label: 'Hip-fire accuracy is improved even more when firing any gun.',
                        labelRU: 'Еще большее повышение точности стрельбы от бедра из всех видов оружия.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        label: 'Hip-fire accuracy is improved when firing any gun.(Nuka-World DLC)',
                        labelRU: 'Повышение точности при стрельбе от бедра из всех видов оружия. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Basher',
                label: 'Basher',
                labelRU: 'Хрясь!',
                img: 'basher.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Get up close and personal! Gun bashing does 25% more damage.',
                        labelRU: 'Войдите с врагом в тесный контакт! Удары прикладом наносят на 25 % больший урон.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        label: 'Gun bashing now does 50% more damage and possibly cripples your opponent.',
                        labelRU: 'Удар прикладом наносит на 50 % больший урон. Шанс нанести увечье.'
                    },
                    {
                        rank: 3,
                        level: 14,
                        label: 'Gun bashing now does 75% more damage and has an increased chance to cripple your opponent.',
                        labelRU: 'Удар прикладом наносит на 75 % больший урон. Повышенный шанс нанести увечье.'
                    },
                    {
                        rank: 4,
                        level: 26,
                        label: 'Gun bashing does double damage and has an increased chance to cripple your opponent. It may also inflict a Critical Hit.',
                        labelRU: 'Удар прикладом наносит на 100 % больший урон. Повышенный шанс нанести увечье. Шанс нанести критический удар.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Rooted',
                label: 'Rooted',
                labelRU: 'Человек-дерево',
                img: 'rooted.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'re part tree! While standing still, you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage.',
                        labelRU: 'Вы чем-то похожи на дерево. +25 % к урону в ближнем бою и без оружия и +25 к сопротивляемости урону, пока вы неподвижны.'
                    },
                    {
                        rank: 2,
                        level: 22,
                        label: 'While standing still, you now gain +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage.',
                        labelRU: '+50 % к урону в ближнем бою и без оружия и +50 к сопротивляемости урону, пока вы неподвижны.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        label: 'While standing still, you may automatically disarm enemies that use melee weapons against you.',
                        labelRU: 'Сохраняя неподвижность, вы можете автоматически разоружать врагов, которые атакуют вас оружием ближнего боя.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'PainTrain',
                label: 'Pain Train',
                labelRU: 'Локомотив',
                img: 'pain-train.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Choo Choo! All aboard! While wearing Power Armor,sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)',
                        labelRU: 'Ту-ту-у! Поезд отправляется! Ускоряясь в Силовой Броне, вы наносите урон врагам и оглушаете их. Впрочем, на роботов и особо крупных противниках это не работает.'
                    },
                    {
                        rank: 2,
                        level: 24,
                        label: 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)',
                        labelRU: 'Ускоряясь в Силовой Броне, вы наносите серьезный урон врагам и еще сильнее оглушаете их. Впрочем, на роботов и особо крупных противниках это все равно не работает.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        label: 'Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage.',
                        labelRU: 'Ускоряясь в Силовой Броне, вы наносите значительный урон врагам и сбиваете их с ног. Силовое приземление наносит еще больший урон.'
                    }
                ]
            }
        ]
    },
    {
        special: 'pe',
        label: 'PERCEPTION',
        labelRU: 'Восприятие',
        perks: [
            {
                rank: 1,
                name: 'Pickpocket',
                label: 'Pickpocket',
                labelRU: 'Карманник',
                img: 'pickpocket.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Your quick hands and sticky fingers make picking pockets 25% easier.',
                        labelRU: 'У вас быстрые руки и ловкие пальцы. Карманные кражи становятся на 25 % легче.'
                    },
                    {
                        rank: 2,
                        level: 6,
                        label: 'Picking pockets is now 50% easier. You can place a live grenade in a person\'s inventory.',
                        labelRU: 'Карманные кражи становятся на 50 % легче. Можно подкладывать в карман жертвы гранаты с выдернутой чекой.'
                    },
                    {
                        rank: 3,
                        level: 17,
                        label: 'Picking pockets is now 75% easier, and you can steal equipped weapons.',
                        labelRU: 'Карманные кражи становятся на 75 % легче. Можно красть оружие из рук.'
                    },
                    {
                        rank: 4,
                        level: 30,
                        label: 'Picking pockets is now twice as easy, and you can steal equipped items.',
                        labelRU: 'Карманные кражи становятся вдвое легче. Вы можете красть предметы экипировки.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Rifleman',
                label: 'Rifleman',
                labelRU: 'Эксперт по карабинам',
                img: 'rifleman.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage',
                        labelRU: 'Держите дистанцию и считайте убитых! Неавтоматические карабины наносят на 20 % больший урон.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        label: 'Attacks with non-automatic rifles do 40% more damage and ignore 15% of a target\'s armor.',
                        labelRU: 'Неавтоматические карабины наносят на 40 % больший урон и игнорируют 15 % брони цели.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        label: 'Attacks with non-automatic rifles do 60% more damage and ignore 20% of a target\'s armor.',
                        labelRU: 'Неавтоматические карабины наносят на 60 % больший урон и игнорируют 20 % брони цели.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        label: 'Attacks with non-automatic rifles do 80% more damage and ignore 25% of a target\'s armor. They also have a slight chance of crippling a limb.',
                        labelRU: 'Неавтоматические карабины наносят на 80 % больший урон и игнорируют 25 % брони. Повышается шанс повредить конечность цели выстрелом из них.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        label: 'Attacks with non-automatic rifles do double damage and ignore 30% of a target\'s armor. They also have a slightly higher chance of crippling a limb.',
                        labelRU: 'Неавтоматические карабины наносят удвоенный урон и игнорируют 30 % брони. Повышается шанс повредить конечность цели выстрелом из них.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Awareness',
                label: 'Awareness',
                labelRU: 'Наблюдательность',
                img: 'awareness.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'To defeat your enemies, know their weaknesses! You can view a target\'s specific damage resistances in V.A.T.S.',
                        labelRU: 'Чтобы победить врага, нужно знать его слабое место. В V.A.T.S. отображаются характеристики сопротивляемости цели.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        label: 'Knowing their weaknesses lets you attack more efficiently. 5% increase to hit chance and damage dealt to VATS targets.(Nuka-World DLC)',
                        labelRU: 'Зная слабые стороны противника, вы можете более эффективно атаковать. Плюс 5% к меткости и урону в режиме V.A.T.S. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Locksmith',
                label: 'Locksmith',
                labelRU: 'Взломщик',
                img: 'locksmith.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Your nimble fingers allow you to pick advanced locks.',
                        labelRU: 'Благодаря ловкости пальцев вы можете взламывать средние замки.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        label: 'You can pick Expert locks.',
                        labelRU: 'Вы можете взламывать сложные замки.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        label: 'You can pick Master locks.',
                        labelRU: 'Вы можете взламывать очень сложные замки.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        label: 'Your bobby pins never break during lockpicking.',
                        labelRU: 'Шпильки никогда не ломаются при взломе замков.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'DemolitionExpert',
                label: 'Demolition Expert',
                labelRU: 'Эксперт-подрывник',
                img: 'demolition-expert.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station.',
                        labelRU: 'Чем больше бабах, тем лучше! Вы можете изготавливать взрывчатку в любых химлабораториях, а урон от нее увеличивается на 25 %.'
                    },
                    {
                        rank: 2,
                        level: 10,
                        label: 'Your explosives do 50% more damage, and grenades gain a throwing arc.',
                        labelRU: 'Взрывчатка наносит на 50 % больший урон. Видна траектория броска гранат.'
                    },
                    {
                        rank: 3,
                        level: 22,
                        label: 'Your explosives do 75% more damage and affect a larger area.',
                        labelRU: 'Взрывчатка наносит на 75 % больший урон и накрывает большую площадь.'
                    },
                    {
                        rank: 4,
                        level: 34,
                        label: 'Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage, too.',
                        labelRU: 'Взрывчатка наносит удвоенный урон. Мины и гранаты, взорванные выстрелом в V.A.T.S, также наносят вдвое больший урон.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'NightPerson',
                label: 'Night Person',
                labelRU: 'Ночное существо',
                img: 'night-person.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.',
                        labelRU: 'Вы — существо ночи! +2 к интеллекту и восприятию с 18:00 до 6:00.'
                    },
                    {
                        rank: 2,
                        level: 25,
                        label: 'You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking.',
                        labelRU: 'Еще +1 к интеллекту и восприятию (в итоге +3) в период с 18:00 до 6:00. Ночное зрение в режиме скрытности.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        label: 'You have 30 extra health between the hours of 6:00 PM and 6:00 AM.(Far Harbor DLC)',
                        labelRU: 'Вы получаете 30 дополнительных очков здоровья в период с 18:00 до 6:00. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Refractor',
                label: 'Refractor',
                labelRU: 'Отражатель',
                img: 'refractor.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You must be part mirror! Instantly gain +10 Energy Resistance.',
                        labelRU: 'Похоже, у вас зеркальная кожа! +10 к сопротивляемости энергии.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        label: 'You now have +20 Energy Resistance.',
                        labelRU: '+20 к сопротивляемости энергии.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        label: 'You now have +30 Energy Resistance.',
                        labelRU: '+30 к сопротивляемости энергии.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        label: 'You now have +40 Energy Resistance.',
                        labelRU: '+40 к сопротивляемости энергии.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        label: 'You now have +50 Energy Resistance.',
                        labelRU: '+50 к сопротивляемости энергии.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Sniper',
                label: 'Sniper',
                labelRU: 'Снайпер',
                img: 'sniper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'It\'s all about focus. You have improved control and can hold your breath longer when aiming with scopes.',
                        labelRU: 'Главное — сосредоточенность. Вы можете дольше задерживать дыхание и лучше координировать движение рук во время прицеливания.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        label: 'Non-automatic, scoped rifles have a chance of knocking down your target.',
                        labelRU: 'Шанс сбить врага с ног одиночным выстрелом из неавтоматического карабина с оптическим прицелом.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        label: 'Non-automatic, scoped rifles gain +25% accuracy to head shot in V.A.T.S.',
                        labelRU: 'Повышение вероятности попадания в голову в V.A.T.S. из неавтоматического карабина с оптическим прицелом на 25 %.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Penetrator',
                label: 'Penetrator',
                labelRU: 'Сквозные выстрелы',
                img: 'penetrator.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'There\'s no place to hide! In V.A.T.S you can target an enemy\'s body parts that are blocked by cover, with a decrease in accuracy.',
                        labelRU: 'Враг не уйдет! При использовании V.A.T.S. вы можете стрелять по частям тела противника, скрытыми за препятствиями. Вероятность попадания при этом снижается.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        label: 'In V.A.T.S when you target an enemy\'s body parts that are blocked by cover, there is no decrease in accuracy.',
                        labelRU: 'При использовании V.A.T.S. вы можете стрелять по частям тела противника, скрытыми за препятствиями. Вероятность попадания при этом не снижается.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'ConcentratedFire',
                label: 'Concentrated Fire',
                labelRU: 'Массированный огонь',
                img: 'concentrated-fire.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy.',
                        labelRU: 'Сосредоточьтесь! +10 % к вероятности попадания в V.A.T.S. за каждую повторную атаку в ту же часть тела.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        label: 'In V.A.T.S every attack on the same body part gains +15% accuracy.',
                        labelRU: '+15 % к вероятности попадания в V.A.T.S. за каждую повторную атаку в ту же часть тела.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        label: 'In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage.',
                        labelRU: '+20 % к вероятности попадания и урону в V.A.T.S. за каждую повторную атаку в ту же часть'
                    }
                ]
            }
        ]
    },
    {
        special: 'en',
        label: 'ENDURANCE',
        labelRU: 'Выносливость',
        perks: [
            {
                rank: 1,
                name: 'Toughness',
                label: 'Toughness',
                labelRU: 'Стойкость',
                img: 'toughness.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance',
                        labelRU: 'Как минимум, держать удар вы умеете! +10 к сопротивляемости урону.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        label: 'You now have +20 damage resistance.',
                        labelRU: '+20 к сопротивляемости урону.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        label: 'You now have +30 damage resistance.',
                        labelRU: '+30 к сопротивляемости урону.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        label: 'You now have +40 damage resistance.',
                        labelRU: '+40 к сопротивляемости урону.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        label: 'You now have +50 damage resistance.',
                        labelRU: '+50 к сопротивляемости урону.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'LeadBelly',
                label: 'Lead Belly',
                labelRU: 'Свинцовое брюхо',
                img: 'lead-belly.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking.',
                       labelRU: 'Ваш пищеварительный тракт идеально приспособился к жизни в Пустоши. +10 к сопротивляемости радиации при употреблении радиоактивной пищи и воды.'
                   },
                   {
                       rank: 2,
                       level: 6,
                       label: 'You take even less radiation from eating or drinking.',
                       labelRU: 'Персонаж получает еще меньше радиации при употреблении зараженной пищи и воды.'
                   },
                   {
                       rank: 3,
                       level: 17,
                       label: 'You take no radiation from eating or drinking.',
                       labelRU: 'Персонаж не получает радиации при употреблении зараженной пищи и воды.'
                   }
                ]
            },
            {
                rank: 3,
                name: 'LifeGiver',
                label: 'Life Giver',
                labelRU: 'Фонтан жизни',
                img: 'life-giver.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'You embody wellness! Instantly gain +20 maximum Health.',
                       labelRU: 'Вы — воплощение здорового образа жизни! Мгновенное увеличение максимального здоровья на 20 единиц.'
                   },
                   {
                       rank: 2,
                       level: 8,
                       label: 'You instantly gain another +20 maximum Health.',
                       labelRU: 'Мгновенное увеличение максимального здоровья еще на 20 единиц.'
                   },
                   {
                       rank: 3,
                       level: 20,
                       label: 'You instantly gain another +20 maximum Health, and slowly regenerate lost Health.',
                       labelRU: 'Мгновенное увеличение максимального здоровья еще на 20 единиц. Постепенное восстановление утраченного здоровья.'
                   }
                ]
            },
            {
                rank: 4,
                name: 'ChemResistant',
                label: 'Chem Resistant',
                labelRU: 'Чистая жизнь',
                img: 'chem-resistant.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'All the rush without the hassle! You\'re 50% less likely to get addicted when consuming Chems',
                       labelRU: 'Приход без проблем. Вероятность получить зависимость при употреблении химикатов снижена на 50 %.'
                   },
                   {
                       rank: 2,
                       level: 22,
                       label: 'You gain complete immunity to chem addiction.',
                       labelRU: 'Вы не можете получить зависимость от химии.'
                   }
                ]
            },
            {
                rank: 5,
                name: 'Aquaboy',
                label: 'Aquaboy',
                labelRU: 'Аква-мальчик',
                img: 'aquaboy.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater',
                       labelRU: 'Вода — ваш союзник. Вы можете дышать под водой и не получаете урон от радиации во время плавания.'
                   },
                   {
                       rank: 2,
                       level: 21,
                       label: 'You become totally undetectable while submerged.',
                       labelRU: 'Если вы находитесь под водой, враг вас не видит.'
                   }
                ]
            },
            {
                rank: 6,
                name: 'RadResistant',
                label: 'Rad Resistant',
                labelRU: 'Свинцовые штаны',
                img: 'rad-resistant.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Exposure to the Wasteland has made you more resilient, instantly granting +10 Radiation Resistance.',
                       labelRU: 'Жизнь в Пустоши закалила вас. +10 к сопротивляемости радиации.'
                   },
                   {
                       rank: 2,
                       level: 13,
                       label: 'You now have +20 Radiation Resistance.',
                       labelRU: '+20 к сопротивляемости радиации.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       label: 'You now have +30 Radiation Resistance.',
                       labelRU: '+30 к сопротивляемости радиации.'
                   },
                   {
                       rank: 4,
                       level: 35,
                       label: 'You now have +40 Radiation Resistance. (Far Harbor DLC)',
                       labelRU: '+40 к сопротивляемости радиации. (Far Harbor DLC)'
                   }
                ]
            },
            {
                rank: 7,
                name: 'AdamantiumSkeleton',
                label: 'Adamantium Skeleton',
                labelRU: 'Адамантиевый скелет',
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Your skeleton has been infused with indestructible metal, reducing limb damage by 30%.',
                       labelRU: 'Ваши кости пропитаны невероятно прочным металлом. Урон конечностям ниже на 30 %'
                   },
                   {
                       rank: 2,
                       level: 13,
                       label: 'Your limb damage is now reduced by 60%.',
                       labelRU: 'Урон конечностям персонажа уменьшается на 60 %.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       label: 'Your limb damage is completely eliminated.',
                       labelRU: 'Конечностям персонажа не может быть нанесен урон.'
                   }
                ]
            },
            {
                rank: 8,
                name: 'Cannibal',
                label: 'Cannibal',
                labelRU: 'Каннибал',
                img: 'cannibal.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Feast on mortal flesh to heal your wounds! Eating human corpses restores Health.',
                       labelRU: 'Лечитесь, пожирая человечину! Поедание человеческих останков восстанавливает здоровье.'
                   },
                   {
                       rank: 2,
                       level: 19,
                       label: 'Eating Ghoul or Super Mutant corpses restores Health.',
                       labelRU: 'Поедание останков гулей и супермутантов восстанавливает здоровье.'
                   },
                   {
                       rank: 3,
                       level: 38,
                       label: 'Eating human, Ghoul or Super Mutant corpses now restores a significant amount of Health.',
                       labelRU: 'Поедание останков гулей, супермутантов и людей значительно восстанавливает здоровье'
                   }
                ]
            },
            {
                rank: 9,
                name: 'Ghoulish',
                label: 'Ghoulish',
                labelRU: 'Гуль',
                img: 'ghoulish.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Sure, you\'re still human - on the outside! Radiation now regenerates your lost Health.',
                       labelRU: 'Вы все еще человек, просто несколько менее симпатичный. Теперь радиация восстанавливает ваше здоровье.'
                   },
                   {
                       rank: 2,
                       level: 24,
                       label: 'Radiation now regenerates even more of your lost Health.',
                       labelRU: 'Радиация еще быстрее восстанавливает ваше здоровье.'
                   },
                   {
                       rank: 3,
                       level: 48,
                       label: 'Radiation now regenerates even more of your lost Health, and some Feral Ghouls will randomly become friendly.',
                       labelRU: 'Радиация еще быстрее восстанавливает ваше здоровье. Некоторые дикие гули могут стать вашими союзниками.'
                   },
                   {
                       rank: 4,
                       level: 50,
                       label: 'Rad damage will now begin to slowly heal, restoring health in the process. (Nuka-World DLC)',
                       labelRU: 'Доза облучения будет постепенно уменьшаться, а здоровье восстанавливаться. (Nuka-World DLC)'
                   } 
                ]
            },
            {
                rank: 10,
                name: 'SolarPowered',
                label: 'Solar Powered',
                labelRU: 'Солнечная батарейка',
                img: 'solar-powered.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       label: 'Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m.',
                       labelRU: 'Здравствуй, Солнце! +2 к силе и выносливости в период с 06:00 до 18:00 часов.'
                   },
                   {
                       rank: 2,
                       level: 27,
                       label: 'Sunlight slowly heals your radiation damage.',
                       labelRU: 'Солнечный свет медленно нейтрализуют полученную вами радиацию.'
                   },
                   {
                       rank: 3,
                       level: 50,
                       label: 'Sunlight slowly regenerates your lost Health.',
                       labelRU: 'Солнечный свет восстанавливает ваше здоровье.'
                   }
                ]
            }
        ]
    },
    {
        special: 'ch',
        label: 'CHARISMA',
        labelRU: 'Харизма',
        perks: [
            {
                rank: 1,
                name: 'CapCollector',
                label: 'Cap Collector',
                labelRU: 'Коллекционер крышек',
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'ve mastered the art of the deal! Buying and selling prices at vendors are better.',
                        labelRU: 'Вы овладели искусством торговли. Цены у торговцев стали выгоднее.'
                    },
                    {
                        rank: 2,
                        level: 20,
                        label: 'Buying and selling prices of vendors are now much better.',
                        labelRU: 'Цены у торговцев стали намного выгоднее.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        label: 'You can now invest a total of 500 caps to raise a store\'s buying capacity.',
                        labelRU: 'Вы можете повысить покупательную способность магазина, инвестировав в него 500 крышек.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Lady Killer',
                label: 'Lady Killer',
                labelRU: 'Женоубийца',
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'re charming... and dangerous. Men/Women suffer +5% damage in combat, and are easier to persuade in dialogue.',
                        labelRU: 'Вы очаровательны… и опасны. Женщины/мужчины легче поддаются вашему убеждению и получают на 5 % больший урон в бою.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        label: 'Men/Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.',
                        labelRU: 'Вероятность успешного разговора с женщинами/мужчинами ещё выше, а наносимый им урон увеличивается на 10 %. Женщин/мужчин легче усмирить с помощью способности Запугивание.'
                    },
                    {
                        rank: 3,
                        level: 16,
                        label: 'Men/Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.',
                        labelRU: 'Вероятность успешного разговора с женщинами/мужчинами намного выше, а наносимый им урон увеличивается на 15 %. Женщин/мужчин ещё легче усмирить с помощью способности Запугивание.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'LoneWanderer',
                label: 'Lone Wanderer',
                labelRU: 'Одинокий странник',
                img: 'lone-wanderer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50.',
                        labelRU: 'Кому нужны друзья? Путешествуя без спутника, вы получаете на 15 % меньший урон, а максимальный вес переносимых вами грузов увеличивается на 50.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        label: 'When adventuring without a companion, you take 20% less damage and carry weight increases by 100',
                        labelRU: 'Путешествуя без спутника, вы получаете на 30 % меньший урон, а максимальный вес переносимых вами грузов увеличивается на 100.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        label: 'When adventuring without a companion, you do 25% more damage.',
                        labelRU: 'Путешествуя без спутника, вы наносите на 25 % больше урона.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        label: 'When adventuring without a companion, you have 25 more action points.(Far Harbor DLC)',
                        labelRU: 'Путешествуя без спутника, вы получаете дополнительных 25 очков действия. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 4,
                name: 'AttackDog',
                label: 'Attack Dog',
                labelRU: 'Боевой пёс',
                img: 'attack-dog.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Your faithful canine companion can hold an enemy, giving you a greater chance to hit them in V.A.T.S.',
                        labelRU: 'Псина обезвреживает противника, повышая вероятность попадания в него в режиме V.A.T.S'
                    },
                    {
                        rank: 2,
                        level: 9,
                        label: 'When your dog holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.',
                        labelRU: 'Обездвиживая противника, ваша собака может повредить ему конечность.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        label: 'When your dog holds an enemy, there\'s a chance he\'ll cause them to bleed.',
                        labelRU: 'Обездвиживая противника, ваша собака может вызвать у него кровотечение.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        label: 'When adventuring with your dog, you take 10% less damage. (Nuka-World DLC)',
                        labelRU: 'Если вы путешествуете в компании собаки, то получаете на 10 % меньше урона. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 5,
                name: 'AnimalFriend',
                label: 'Animal Friend',
                labelRU: 'Друг животных',
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.',
                        labelRU: 'Вы понимаете язык диких зверей! Наставьте оружие на животное, которое меньше вас по уровню, чтобы получить шанс усмирить его.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        label: 'When you successfully pacify an animal, you can incite it to attack',
                        labelRU: 'Усмирив животное, вы можете заставить его атаковать ваших врагов.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        label: 'When you successfully pacify an animal, you can give it specific commands',
                        labelRU: 'Усмирив животное, вы можете отдавать ему определенные команды.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'LocalLeader',
                label: 'Local Leader',
                labelRU: 'Местный лидер',
                img: 'local-leader.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements.',
                        labelRU: 'Будучи всенародно признанным правителем, вы можете прокладывать линии снабжения между своими поселениями.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        label: 'You can build stores and workstations at workshop settlements.',
                        labelRU: 'Вы можете строить торговые пункты и мастерские в поселениях.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'PartyBoy',
                label: 'Party Boy',
                labelRU: 'Тусовщик',
                img: 'party-boy-party-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.',
                        labelRU: 'Никто не умеет так веселиться, как вы! Алкоголь не вызывает зависимости.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        label: 'The effects of alcohol are doubled.',
                        labelRU: 'Эффекты от употребления алкоголя усиливаются в 2 раза.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        label: 'Your Luck is increased by 3 while you\'re under the influence of alcohol.',
                        labelRU: 'В состоянии алкогольного опьянения ваша удача повышается на 3.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Inspiration',
                label: 'Inspiration',
                labelRU: 'Прирождённый лидер',
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Because you lead by example, your companion does more damage in combat, and cannot hurt you.',
                        labelRU: 'Вы — прирождённый лидер. Ваш спутник наносит дополнительный урон в бою и не может ранить вас самих.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        label: 'Your companion resists more damage in combat, and can\'t be harmed by your attacks.',
                        labelRU: 'Спутник лучше сопротивляется урону, а также становится неуязвимым к вашим собственным атакам.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        label: 'Your companion can carry more items.',
                        labelRU: 'Спутник может нести больше вещей.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'WastelandWhisperer',
                label: 'Wasteland Whisperer',
                labelRU: 'Говорящий с Пустошью',
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.',
                        labelRU: 'Станьте повелителем постапокалиптического мира! Наставьте оружие на существо, которое меньше вас по уровню, чтобы получить шанс усмирить его.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        label: 'When you successfully pacify a creature, you can incite it to attack.',
                        labelRU: 'Усмирив существо, вы можете заставить его атаковать ваших врагов.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        label: 'When you successfully pacify a creature, you can give it specific commands.',
                        labelRU: 'Усмирив существо, вы сможете им командовать.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Intimidation',
                label: 'Intimidation',
                labelRU: 'Запугивание',
                img: 'intimidation.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them.',
                        labelRU: 'Покажите всем, кто тут главный! наставьте оружие на человека, который меньше вас по уровню, чтобы получить шанс усмирить его.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        label: 'When you successfully pacify someone, you can incite them to attack.',
                        labelRU: 'Усмирив человека, вы можете заставить его атаковать ваших врагов.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        label: 'When you successfully pacify someone, you can give them specific commands.',
                        labelRU: 'Усмирив человека, вы сможете им командовать.'
                    }
                ]
            }
        ]
    },
    {
        special: 'in',
        label: 'INTELLIGENCE',
        labelRU: 'Интеллект',
        perks: [
            {
                rank: 1,
                name: 'V.A.N.S.',
                label: 'V.A.N.S.',
                labelRU: 'V.A.N.S.',
                img: 'vans.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S.',
                        labelRU: 'Пусть вас направит сила «Волт-Тек»! Путь к вашей ближайшей цели задания отображается в V.A.T.S'
                    },
                    {
                        rank: 2,
                        level: 36,
                        label: 'Gain +2 to Perception. (Nuka-World DLC)',
                        labelRU: 'Восприятие +2 (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Medic',
                label: 'Medic',
                labelRU: 'Медик',
                img: 'medic.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation.',
                        labelRU: 'Врача, срочно! Стимуляторы восстанавливают 40 % утраченного здоровья, а антирадин нейтрализует 40 % радиации.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        label: 'Stimpaks restore 60% of lost Health, and RadAway removes 60% of radiation',
                        labelRU: 'Стимуляторы восстанавливают 60 % утраченного здоровья, а антирадин нейтрализует 60 % радиации.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        label: 'Stimpaks restore 80% of lost Health, and RadAway removes 80% of radiation',
                        labelRU: 'Стимуляторы восстанавливают 80 % утраченного здоровья, а антирадин нейтрализует 80 % радиации.'
                    },
                    {
                        rank: 4,
                        level: 49,
                        label: 'Stimpaks and RadAway restore all lost health and radiation, and work much more quickly.',
                        labelRU: 'Стимуляторы полностью восстанавливают здоровье, а антирадин нейтрализует всю радиацию. При этом они действуют намного быстрее.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'GunNut',
                label: 'Gun Nut',
                labelRU: 'Фанатик оружия',
                img: 'gun-nut.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You gain access to base level and Rank 1 gun mods',
                        labelRU: 'Стреляйте и убивайте, получив доступ к к модификация оружия базового и 1 уровня.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        label: 'You gain access to Rank 2 gun mods',
                        labelRU: 'Вы можете использовать модификации стрелкового оружия 2 уровня.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        label: 'You gain access to Rank 3 gun mods',
                        labelRU: 'Вы можете использовать модификации стрелкового оружия 3 уровня.'
                    },
                    {
                        rank: 4,
                        level: 39,
                        label: 'You gain access to Rank 4 gun mods',
                        labelRU: 'Вы можете использовать модификации стрелкового оружия 4 уровня.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Hacker',
                label: 'Hacker',
                labelRU: 'Хакер',
                img: 'hacker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals',
                        labelRU: 'Знание современных программ шифрования позволяет вам взламывать средние терминалы.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        label: 'You can hack Expert terminals.',
                        labelRU: 'Вы можете взламывать сложные терминалы.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        label: 'You can hack Master terminals.',
                        labelRU: 'Вы можете взламывать очень сложные терминалы.'
                    },
                    {
                        rank: 4,
                        level: 33,
                        label: 'When hacking, you never get locked out of a terminal when things go wrong.',
                        labelRU: 'Терминалы не блокируются в ходе взлома.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Scrapper',
                label: 'Scrapper',
                labelRU: 'Драчун',
                img: 'scrapper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.',
                        labelRU: 'Всему найдется применение! Разбирая оружие и доспехи, вы можете добывать необычные компоненты: винты, алюминий, медь.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        label: 'You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted.',
                        labelRU: 'Разбирая оружие и доспехи, вы можете добывать редкие компоненты: электронику, ядерные материалы. Предметы с помеченными компонентами подсвечиваются.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        label: 'You get more from salvaging. Appears to only apply to uncommon components, i.e., those affected by the first level of the perk. (Far Harbor DLC)',
                        labelRU: 'Разбирая на части предметы, вы получаете больше материалов. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Science',
                label: 'Science',
                labelRU: 'Наука!',
                img: 'science.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.',
                        labelRU: 'Воспользуйтесь преимуществами передовых технологий, получив доступ к базовым и первоуровневым модификациям высокотехнологического оружия.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        label: 'You gain access to Rank 2 high-tech mods.',
                        labelRU: 'Вы можете использовать высокотехнологические модификации 2 уровня.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        label: 'You gain access to Rank 3 high-tech mods.',
                        labelRU: 'Вы можете использовать высокотехнологические модификации 3 уровня.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        label: 'You gain access to Rank 4 high-tech mods.',
                        labelRU: 'Вы можете использовать высокотехнологические модификации 4 уровня.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Chemist',
                label: 'Chemist',
                labelRU: 'Химик',
                img: 'chemist.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Any chems you take last 50% longer. Far out.',
                        labelRU: 'Длительность действия препаратов увеличивается на 50 %. Полный улет.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        label: 'Any chems you take now last twice as long.',
                        labelRU: 'Длительность действия препаратов увеличивается на 100 %.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        label: 'Any chems you take now last an additional 150% longer.',
                        labelRU: 'Длительность действия препаратов увеличивается на 150 %.'
                    },
                    {
                        rank: 4,
                        level: 45,
                        label: 'Any chems you take now last an additional 200% longer.',
                        labelRU: 'Длительность действия препаратов увеличивается на 200 %.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'RoboticsExpert',
                label: 'Robotics Expert',
                labelRU: 'Эксперт по роботехнике',
                img: 'robotics-expert.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct.',
                        labelRU: 'Машины должны служить людям. Теперь вы можете взламывать роботов, чтобы включать и выключать их или запустить их программу самоуничтожения.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        label: 'When you successfully hack a robot, you can incite it to attack.',
                        labelRU: 'Взломав робота, вы можете заставить его атаковать ваших врагов.'
                    },
                    {
                        rank: 3,
                        level: 44,
                        label: 'When you successfully hack a robot, you can give it specific commands.',
                        labelRU: 'Взломав робота, вы сможете отдавать ему определенные команды.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'NuclearPhysicist',
                label: 'Nuclear Physicist',
                labelRU: 'Физик-ядерщик',
                img: 'nuclear-physicist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'ve learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer.',
                        labelRU: 'Вы научились расщеплять атом… и повелевать его энергией. Урон от радиационного оружия повышен на 50 %, а срок действия ядерных блоков увеличен на 25 %'
                    },
                    {
                        rank: 2,
                        level: 14,
                        label: 'Radiation weapons now do double damage and Fusion Cores last an extra 50% longer.',
                        labelRU: 'Радиационное оружие наносит удвоенный урон, а ядерные блоки действуют еще на 50 % дольше.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        label: 'Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long.',
                        labelRU: 'Вы можете извлекать ядерные блоки из Силовой брони и бросать их, словно мощные гранаты. Ядерные блоки действуют вдвое дольше.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'NerdRage',
                label: 'Nerd Rage',
                labelRU: 'Бешенство ботаника!',
                img: 'nerd-rage.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts.',
                        labelRU: 'Гений в ярости! Когда здоровье падает ниже 20 %, время замедляется, сопротивляемость урону +20, а наносимый урон увеличивается на 20 %.'
                    },
                    {
                        rank: 2,
                        level: 31,
                        label: 'You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect.',
                        labelRU: '+30 к сопротивляемости урону и +30 % к наносимому урону во время действия «Бешенства ботаника».'
                    },
                    {
                        rank: 3,
                        level: 50,
                        label: 'You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.',
                        labelRU: 'Сопротивляемость урону +40, а наносимый урон увеличивается на 40 % пока действует «Бешенства ботаника». Убив врага в этом состоянии, вы восстанавливаете здоровье.'
                    }
                ]
            }
        ]
    },
    {
        special: 'ag',
        label: 'AGILITY',
        labelRU: 'Ловкость',
        perks: [
            {
                rank: 1,
                name: 'Gunslinger',
                label: 'Gunslinger',
                labelRU: 'Дуэлист',
                img: 'gunslinger.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Channel the spirit of the old west! Non-automatic pistols do 20% more damage.',
                        labelRU: 'Вспомним традиции Дикого Запада! Неавтоматические пистолеты наносят на 20 % больше урона.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        label: 'Non-automatic pistols now do 40% more damage and have increased range.',
                        labelRU: 'Неавтоматические пистолеты наносят на 40 % больше урона, а их дальность стрельбы увеличена.'
                    },
                    {
                        rank: 3,
                        level: 15,
                        label: 'Non-automatic pistols now do 60% more damage and range is increased even further.',
                        labelRU: 'Неавтоматические пистолеты наносят на 60 % больше урона, а их дальность стрельбы увеличена еще больше.'
                    },
                    {
                        rank: 4,
                        level: 27,
                        label: 'Non-automatic pistols now do 80% more damage and their attacks can disarm opponents.',
                        labelRU: 'Неавтоматические пистолеты наносят на 80 % больший урон. Их выстрелы могут разоружить противника.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        label: 'Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb.',
                        labelRU: 'Неавтоматические пистолеты наносят на 100 % больше урона. Их выстрелы с большей вероятностью разоружают противника и даже могут нанести ему увечье.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Commando',
                label: 'Commando',
                labelRU: 'Коммандос',
                img: 'commando.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Rigorous combat training means automatic weapons do 20% more damage',
                        labelRU: 'Ваши тренировки на полигоне не проходят даром. Автоматическое оружие наносит на 20 % больший урон.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        label: 'Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy.',
                        labelRU: 'Автоматическое оружие наносит на 40 % больший урон. Повышенная точность стрельбы от бедра.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        label: 'Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more.',
                        labelRU: 'Автоматическое оружие наносит на 60 % больший урон. Высокая точность стрельбы от бедра.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        label: 'Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents.',
                        labelRU: 'Автоматическое оружие наносит на 80 % больший урон и дает шанс ошеломить врага.'
                    },
                    {
                        rank: 5,
                        level: 49,
                        label: 'Your automatic weapons now do double damage and have a greater chance to stagger opponents.',
                        labelRU: 'Автоматическое оружие наносит на 100 % больший урон и дает повышенный шанс ошеломить врага.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Sneak',
                label: 'Sneak',
                labelRU: 'Лазутчик',
                img: 'sneak.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Become whisper, become shadow. You are 20% harder to detect while sneaking.',
                        labelRU: 'Станьте шёпотом, станьте тенью. Если вы находитесь в режиме скрытности, вероятность обнаружения вас противником уменьшается на 20 %.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        label: 'You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps.',
                        labelRU: 'Вероятность того, что в режиме скрытности вас обнаружит враг, ниже на 30 %. От ваших шагов не срабатывают напольные ловушки.'
                    },
                    {
                        rank: 3,
                        level: 12,
                        label: 'You are now 40% harder to detect while sneaking, and no longer trigger enemy mines.',
                        labelRU: 'Вероятность того, что в режиме скрытности вас обнаружит враг, ниже на 40 %. От ваших шагов не срабатывают напольные ловушки и мины.'
                    },
                    {
                        rank: 4,
                        level: 23,
                        label: 'You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth.',
                        labelRU: 'Вероятность того, что в режиме скрытности вас обнаружит враг, ниже на 50 %. Бег в режиме скрытности больше не выдает вас.'
                    },
                    {
                        rank: 5,
                        level: 38,
                        label: 'Engaging stealth causes distant enemies to lose you.',
                        labelRU: 'Если вы находитесь в режиме скрытности, находящиеся вдали враги перестают вас преследовать.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'MisterSandman',
                label: 'Mister Sandman',
                labelRU: 'Песочный человек',
                img: 'mister-sandman.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage.',
                        labelRU: 'Служа самой Смерти, вы можете мгновенно убивать спящих. Урон от скрытных атак при использовании оружия с глушителем увеличен на 15 %.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        label: 'Your silenced weapons do an additional 30% sneak attack damage.',
                        labelRU: 'Урон от оружия с глушителем при использовании скрытных атак увеличивается на 30 %.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        label: 'Your silenced weapons now do 50% more sneak attack damage.',
                        labelRU: 'Урон от оружия с глушителем при использовании скрытных атак увеличивается на 50 %.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'ActionBoy',
                label: 'Action Boy',
                labelRU: 'Живчик',
                img: 'action-boy-action-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'There\'s no time to waste! Action Points regenerate 25% faster.',
                        labelRU: 'Нельзя терять ни минуты! ОД восстанавливаются на 25 % быстрее.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        label: 'Your Action Points now regenerate 50% faster.',
                        labelRU: 'ОД восстанавливаются на 50 % быстрее.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        label: 'Your Action Points now regenerate 75% faster. (Far Harbor DLC)',
                        labelRU: 'Очки действия теперь восстанавливаются на 75 % быстрее. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 6,
                name: 'MovingTarget',
                label: 'Moving Target',
                labelRU: 'Бегущая мишень',
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'They can\'t hurt what they can\'t hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you\'re sprinting.',
                        labelRU: 'Не догонишь, не поймаешь! +25 к сопротивляемости урону и энергии при ускорении.'
                    },
                    {
                        rank: 2,
                        level: 24,
                        label: 'You now get +50 Damage Resistance and +50 Energy Resistance when you\'re sprinting.',
                        labelRU: '+50 к сопротивляемости урону и энергии при ускорении.'
                    },
                    {
                        rank: 3,
                        level: 44,
                        label: 'Sprinting costs 50% fewer Action Points.',
                        labelRU: 'Расход ОД при ускорении уменьшается на 50 %.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Ninja',
                label: 'Ninja',
                labelRU: 'Ниндзя',
                img: 'ninja.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Trained as a shadow warrior, your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage.',
                        labelRU: 'Вы — настоящий ниндзя. Урон от скрытных атак в дальнем бою увеличивается в 2,5 раза, а в ближнем бою — в 4 раза.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        label: 'Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage.',
                        labelRU: 'Урон от скрытных атак в дальнем бою увеличивается в 3 раза, а в ближнем бою — в 5 раз'
                    },
                    {
                        rank: 3,
                        level: 33,
                        label: 'Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage.',
                        labelRU: 'Урон от скрытных атак в дальнем бою увеличивается в 3,5 раза, а в ближнем бою — в 10 раз.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'QuickHands',
                label: 'Quick Hands',
                labelRU: 'Ловкость рук',
                img: 'quick-hands.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'In combat, there\'s no time to hesitate. You can reload all guns faster.',
                        labelRU: 'В бою дорога каждая секунда. Ускорение перезарядки всех видов оружия.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        label: 'Reloading guns costs no Action Points in V.A.T.S.',
                        labelRU: 'При перезарядке оружия в V.A.T.S. не тратятся ОД.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        label: 'Quick and efficient. You gain 10 additional Action Points. (Nuka-World DLC)',
                        labelRU: 'Быстро и эффективно. Вы получаете 10 дополнительных ОД. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Blitz',
                label: 'Blitz',
                labelRU: 'Блиц',
                img: 'blitz.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly.',
                        labelRU: 'Найдите брешь и идите на прорыв! Дистанция атак в ближнем бою в V.A.T.S. значительно увеличивается.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        label: 'V.A.T.S. melee distance is increased even more, and the farther the Blitz distance, the greater the damage.',
                        labelRU: 'Еще большее увеличение дистанции ближнего боя в V.A.T.S.. Чем дальше враг, тем больший урон он получает.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'GunFu',
                label: 'Gun Fu',
                labelRU: 'Ган-ката',
                img: 'gun-fu.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond.',
                        labelRU: 'Вы обнаружили связь между боевыми искусствами и стрельбой! +25 % к урону второй и последующим целям в V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        label: 'In V.A.T.S. you do 50% more damage to your third target and beyond.',
                        labelRU: '+50 % к урону 3-й и последующим целям в V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        label: 'In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond.',
                        labelRU: 'Попадания в 4-ю и последующие цели в V.A.T.S. становятся критическими.'
                    }
                ]
            }
        ]
    },
    {
        special: 'lu',
        label: 'LUCK',
        labelRU: 'Удача',
        perks: [
            {
                rank: 1,
                name: 'FortuneFinder',
                label: 'Fortune Finder',
                labelRU: 'Кладоискатель',
                img: 'fortune-finder.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You find more bottle caps in containers.',
                        labelRU: 'Вы научились искать сокровища Пустоши и теперь будете находить больше крышек в ящиках.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        label: 'You find even more bottle caps in containers.',
                        labelRU: 'В ящиках можно найти еще больше крышек.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        label: 'You find even more bottle caps in containers.',
                        labelRU: 'В ящиках можно найти еще больше крышек.'
                    },
                    {
                        rank: 4,
                        level: 40,
                        label: 'You find even more bottle caps in containers, and there is a chance of enemies exploding into a shower of caps when you kill them.',
                        labelRU: 'В ящиках можно найти еще больше крышек. Есть шанс, что убитый вами противник осыпет вас дождем из крышек.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Scrounger',
                label: 'Scrounger',
                labelRU: 'Халявщик',
                img: 'scrounger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You find more ammunition in containers.',
                        labelRU: 'Вы способны добывать боеприпасы даже на поле боя и находите больше патронов в ящиках.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        label: 'You find even more ammunition in containers.',
                        labelRU: 'На трупах и в ящиках можно найти еще больше боеприпасов.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        label: 'You find even more ammunition in containers.',
                        labelRU: 'На трупах и в ящиках можно найти еще больше боеприпасов.'
                    },
                    {
                        rank: 4,
                        level: 37,
                        label: 'You find even more ammunition in containers.',
                        labelRU: 'При выстреливании последнего патрона в магазине, есть шанс, что магазин восполнится.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Bloody Mess',
                label: 'Bloody Mess',
                labelRU: 'Кровавая баня',
                img: 'bloody-mess.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: '+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!',
                        labelRU: 'Увеличение урона на 5 % означает, что убитые враги иногда могут взрываться. Берегитесь летящих глазных яблок!'
                    },
                    {
                        rank: 2,
                        level: 9,
                        label: 'You now inflict +10% damage in combat.',
                        labelRU: '+10 % к урону в бою.'
                    },
                    {
                        rank: 3,
                        level: 31,
                        label: 'You now inflict +15% damage in combat.',
                        labelRU: '+15 % к урону в бою.'
                    },
                    {
                        rank: 4,
                        level: 47,
                        label: 'When an enemy explodes, nearby enemies may suffer the same fate.',
                        labelRU: 'Если ваша цель взрывается, находящиеся рядом с ней враги могут разделить ее судьбу.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'MysteriousStranger',
                label: 'Mysterious Stranger',
                labelRU: 'Загадочный незнакомец',
                img: 'mysterious-stranger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency...',
                        labelRU: 'Кто он? Почему он вам помогает? Какая разница! При использовании V.A.T.S. к вам на помощь иногда будет приходить смертельно опасный незнакомец.'
                    },
                    {
                        rank: 2,
                        level: 22,
                        label: 'The Mysterious Stranger appears more often in V.A.T.S.',
                        labelRU: 'При использовании V.A.T.S. загадочный незнакомец появляется чаще.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        label: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your Critical meter gets filled.',
                        labelRU: 'При использовании V.A.T.S. загадочный незнакомец появляется чаще. Когда он убивает противника, ваш индикатор критической атаки может заполняться.'
                    },
                    {
                        rank: 4,
                        level: 49,
                        label: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a high chance your Critical meter gets filled. (Nuka-World DLC)',
                        labelRU: 'При использовании VATS Загадочный незнакомец появляется еще чаще. Когда он убивает противника, ваш индикатор критической атаки с высокой вероятностью может заполниться. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 5,
                name: 'IdiotSavant',
                label: 'Idiot Savant',
                labelRU: 'Савант',
                img: 'idiot-savant.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'re not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance.',
                        labelRU: 'Вы не тупы, а альтернативно гениальны. Любое действие может принести в 3 раза больше опыта. Чем ниже интеллект, тем выше вероятность успеха.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        label: 'You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance.',
                        labelRU: 'Любое действие может принести в 5 раза больше опыта. Чем ниже интеллект, тем выше вероятность успеха.'
                    },
                    {
                        rank: 3,
                        level: 34,
                        label: 'Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance.',
                        labelRU: 'Получение дополнительного опыта за любое действие может дать временное трехкратное увеличение опыта за все убийства. Чем ниже интеллект, тем выше вероятность.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'BetterCriticals',
                label: 'Better Criticals',
                labelRU: 'Критический урон',
                img: 'better-criticals.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.',
                        labelRU: 'Курсы повышения боевой квалификации! Урон от критических атак увеличен на 50 %.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        label: 'Your criticals now do twice as much extra damage.',
                        labelRU: 'Критические атаки наносят вдвое больший урон.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        label: 'Your criticals now do 2.5x as much extra damage.',
                        labelRU: 'Критические атаки наносят в 2,5 раза больший урон.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'CriticalBanker',
                label: 'Critical Banker',
                labelRU: 'Банк критических атак',
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'You\'re a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it most.',
                        labelRU: 'Терпение и тактическая смекалка — ваши сильные стороны. Вы можете сохранить 1 критическую атаку для последующего использования в V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        label: 'You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.',
                        labelRU: 'Вы можете сохранить 2 критические атаки для последующего использования в V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        label: 'You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical.',
                        labelRU: 'Вы можете сохранить 3 критические атаки для последующего использования в V.A.T.S. При каждом сохранении критической атаки есть шанс на автоматическое сохранение еще одной.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        label: 'You can now save 4 Critical Hits, to be used in V.A.T.S. when you need them the most. (Far Harbor DLC)',
                        labelRU: 'Вы можете сохранить 4 критические атаки для последующего использования в V.A.T.S. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 8,
                name: 'GrimReapersSprint',
                label: 'Grim Reaper\'s Sprint',
                labelRU: 'Смерть на взлёте',
                img: 'grim-reapers-sprint.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points.',
                        labelRU: 'Вы — воплощение смерти! Уничтожение врага в V.A.T.S. с вероятностью 15 % восстанавливает все ОД.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        label: 'Any kill in V.A.T.S. now has a 25% chance to restore all Action Points.',
                        labelRU: 'Уничтожение врага в V.A.T.S. с вероятностью 25 % восстанавливает все ОД.'
                    },
                    {
                        rank: 3,
                        level: 46,
                        label: 'Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter.',
                        labelRU: 'Уничтожение врага в V.A.T.S. с вероятностью 35 % восстанавливает все ОД и заполняет индикатор критической атаки.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'FourLeafClover',
                label: 'Four Leaf Clover',
                labelRU: 'Клевер-четырёхлистник',
                img: 'four-leaf-clover.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter.',
                        labelRU: 'Думаете, вам повезет? Вероятность заполнить индикатор критической атаки при попадании в V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        label: 'Each hit in V.A.T.S. now has an even better chance of filling your Critical meter.',
                        labelRU: 'Еще большая вероятность мгновенно заполнить индикатор критической атаки при попадании в V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        label: 'Each hit in V.A.T.S. now has a very good chance of filling your Critical meter.',
                        labelRU: 'Очень высокая вероятность мгновенно заполнить индикатор критической атаки при попадании в V.A.T.S.'
                    },
                    {
                        rank: 4,
                        level: 48,
                        label: 'Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter.',
                        labelRU: 'Превосходная вероятность мгновенно заполнить индикатор критической атаки при попадании в V.A.T.S.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Ricochet',
                label: 'Ricochet',
                labelRU: 'Рикошет',
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        label: 'What goes around comes around! Any enemy\'s ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance.',
                        labelRU: 'Что посеешь, то и пожнешь! Противник, атакующий вас в дальнем бою, получает шанс погибнуть от собственного выстрела. Чем меньше ваше здоровье, тем выше вероятность.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        label: 'There\'s an increased chance that an enemy\'s shot will ricochet back and kill them.',
                        labelRU: 'Еще более высокий шанс того, что выстрел противника срикошетит в него самого и убьет.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        label: 'When an enemy\'s shot ricochets back and kills them, there is a chance your Critical meter gets filled.',
                        labelRU: 'Если противник умирает от рикошета, ваш индикатор критической атаки может заполниться.'
                    }
                ]
            }
        ]
    }
];
