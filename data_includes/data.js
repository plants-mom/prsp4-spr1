
define_ibex_controller({
      name: "MyPractice",

      jqueryWidget: {
          _init: function () {
                this.options.transfer = null;
                this.element.VBox({
                      options: this.options,
                      triggers: [1],
                      padding: "1em",
                      children: [
                            "Message", this.options,
                            "DashedSentence", this.options
                ]
                  });
          }
      },

      properties: { }
});
var exp = seq(sepWith("sep", seq("practice", "startexp", rshuffle(startsWith("target"), startsWith("filler")))));
var shuffleSequence = seq("intro","instructions", exp, "sr", "end");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong answer. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading",
        display: "in place"
    },
    "Message", {
        hideProgressBar: true
    },

    "Question", {
        hasCorrect: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var manualSendResults = true;

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],


    ["intro", "Form", {html: { include: "intro.html" }}],
    ["instructions", "Message", {html: { include: "instructions.html" }}],
    ["startexp", "Message", {html: "This is the end of the practice session. The experiment begins now."}],
    ["end", "Message", {html: { include: "end.html" }, transfer: null}],


    ["practice", "MyPractice", {html: "<p style=\"text-align: center\">Use the spacebar to read the sentence.</p>",
                                s: "There is a nurse who nurses all the nurses who don't nurse themselves."},
     "Message", {html: "Some of the sentences will be quite complicated. Make sure you understand the sentence, because sometimes you will be asked a question about the sentence you read. If you answer incorrectly you will be notified about that."}
                                 ],

    ["practice", "MyPractice", {html: "<p style=\"text-align: center\">Use the spacebar to read the sentence.</p>",
                                s: "Malamutes are beautiful dogs."},
     "Question", {q: "Are malamutes cats?",
                  as: ["no", "yes"]}],


[["target-2-too-short", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. An hour later, Jamie disturbed Sandra yet again, before heading out to buy coffee and muffins for the office."}],
[["target-2-nil-short", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. An hour later, Jamie finished his new plan, before heading out to buy coffee and muffins for the office."}],
[["target-2-too-long", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. It was certainly a challenging project for the firm but the secret to success, as he saw it, was in a newspaper-based advertisement campaign. An hour later, Jamie disturbed Sandra yet again, before heading out to buy coffee and muffins for the office."}],
[["target-2-nil-long", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. It was certainly a challenging project for the firm but the secret to success, as he saw it, was in a newspaper-based advertisement campaign. An hour later, Jamie finished his new plan, before heading out to buy coffee and muffins for the office."}],

[["target-3-too-short", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. This year, Cleo had a large litter yet again but seems to be coping well nonetheless."}],
[["target-3-nil-short", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. This year, Cleo had no single kitten born alive but seems to be coping well nonetheless."}],
[["target-3-too-long", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. When they reached the required age, the Johnsons placed some advertisements in local newspapers and all of them found new loving owners in the local area. This year, Cleo had a large litter yet again but seems to be coping well nonetheless."}],
[["target-3-nil-long", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. When they reached the required age, the Johnsons placed some advertisements in local newspapers and all of them found new loving owners in the local area. This year, Cleo had no single kitten born alive but seems to be coping well nonetheless."}],





[["target-8-too-short", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. This break, Joe held a party yet again but then took a plane to Mexico to join his parents."}],
[["target-8-nil-short", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. This break, Joe had to study for exams but then took a plane to Mexico to join his parents."}],
[["target-8-too-long", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. Whilst few individuals from either of the two groups had known each other before the evening, everybody seemed to get on really well. This break, Joe held a party yet again but then took a plane to Mexico to join his parents."}],
[["target-8-nil-long", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. Whilst few individuals from either of the two groups had known each other before the evening, everybody seemed to get on really well. This break, Joe had to study for exams but then took a plane to Mexico to join his parents."}],

[["target-9-too-short", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Later that day, Tim got a flat tire yet again, but after that everything went smoothly for the rest of the week."}],
[["target-9-nil-short", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Later that day, Tim had to repair his back brakes, but after that everything went smoothly for the rest of the week."}],
[["target-9-too-long", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Luckily, he had packed his trusted, old repair kit and used the opportunity to have an early lunch and update his blog. Later that day, Tim got a flat tire yet again, but after that everything went smoothly for the rest of the week."}],
[["target-9-nil-long", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Luckily, he had packed his trusted, old repair kit and used the opportunity to have an early lunch and update his blog. Later that day, Tim had to repair his back brakes, but after that everything went smoothly for the rest of the week."}],





[["target-14-too-short", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. However, last week, Jenny got sick yet again, which made her really hope that no more misfortune was in store for her that year."}],
[["target-14-nil-short", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. However, last week, Jenny got her keys stolen, which made her really hope that no more misfortune was in store for her that year."}],
[["target-14-too-long", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. At least the time out of the office had given her some opportunities to reflect on all the happenings over the past year. However, last week, Jenny got sick yet again, which made her really hope that no more misfortune was in store for her that year."}],
[["target-14-nil-long", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. At least the time out of the office had given her some opportunities to reflect on all the happenings over the past year. However, last week, Jenny got her keys stolen, which made her really hope that no more misfortune was in store for her that year."}],


[["target-16-too-short", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. At this year's show, Will danced yet again but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],
[["target-16-nil-short", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. At this year's show, Will joined the choir but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],
[["target-16-too-long", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. The show was a long-standing company tradition and helped to raise funds for the two hospices in the area and a local homelessness project. At this year's show, Will danced yet again but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],
[["target-16-nil-long", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. The show was a long-standing company tradition and helped to raise funds for the two hospices in the area and a local homelessness project. At this year's show, Will joined the choir but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],


[["target-18-too-short", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. In the summer, Zoe took a trip yet again but after that she cut her spending and lived quite frugally for the rest of the year."}],
[["target-18-nil-short", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. In the summer, Zoe bought an expensive new laptop but after that she cut her spending and lived quite frugally for the rest of the year."}],
[["target-18-too-long", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. More specifically, they had been to Germany to visit Jake's sister and her family in Munich before heading to Berlin for some sightseeing. In the summer, Zoe took a trip yet again but after that she cut her spending and lived quite frugally for the rest of the year."}],
[["target-18-nil-long", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. More specifically, they had been to Germany to visit Jake's sister and her family in Munich before heading to Berlin for some sightseeing. In the summer, Zoe bought an expensive new laptop but after that she cut her spending and lived quite frugally for the rest of the year."}],



[["target-21-too-short", 21], "DashedSentence", {s: "There was something very odd about Arthur today. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur apologized yet again before proceeding to burst into tears."}],
[["target-21-nil-short", 21], "DashedSentence", {s: "There was something very odd about Arthur today. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur spilt his coffee before proceeding to burst into tears."}],
[["target-21-too-long", 21], "DashedSentence", {s: "There was something very odd about Arthur today. This morning, when we met at the photocopier, he said sorry to me for no apparent reason whatsoever. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur apologized yet again before proceeding to burst into tears."}],
[["target-21-nil-long", 21], "DashedSentence", {s: "There was something very odd about Arthur today. This morning, when we met at the photocopier, he said sorry to me for no apparent reason whatsoever. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur spilt his coffee before proceeding to burst into tears."}],



[["target-24-too-short", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. Later, Frank ate a high calorie snack yet again and pondered on what his physician would think about the day's menu so far."}],
[["target-24-nil-short", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. Later, Frank ate some healthy grilled fish with salad and pondered on what his physician would think about the day's menu so far."}],
[["target-24-too-long", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. It was a shame as he had made some progress on the robbery case that morning and had wished to share it with them. Later, Frank ate a high calorie snack yet again and pondered on what his physician would think about the day's menu so far."}],
[["target-24-nil-long", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. It was a shame as he had made some progress on the robbery case that morning and had wished to share it with them. Later, Frank ate some healthy grilled fish with salad and pondered on what his physician would think about the day's menu so far."}],


[["filler-25", 25], "DashedSentence", {s: "Emica went out with friends. They decided to go to a bar. Emica did not like the music there. She stayed outside and started talking with strangers and having fun on her own."}],





[["filler-30", 30], "DashedSentence", {s: "Jimmy felt bad. A week ago his colleague was injured at work. Jimmy knew he should visit her at the hospital but he could not force himself to do it."}],

[["filler-31", 31], "DashedSentence", {s: "Kima was mad at herself. She suspected the package would fall off without the additional tape. Now it was too late."}],

[["filler-32", 32], "DashedSentence", {s: "Roland got used to office work. It shocked him when it turned out he was recommended for fieldwork."}],

[["filler-33", 33], "DashedSentence", {s: "Ronnie shut the door behind her. She was extremely proud of herself. She would remember this conversation for a long time."}],

[["filler-34", 34], "DashedSentence", {s: "Bill sat in the corner. He was very lucky his employee did not see him. He should have been more careful."}],

[["filler-35", 35], "DashedSentence", {s: "Alyson finished her drink. She waited another quarter of an hour. Jake did not show up. She started realizing her client must have been hiding something."}],

[["filler-36", 36], "DashedSentence", {s: "Tanya who her mother sent to do the groceries was angry. She felt it was her sister's turn to do them."}],

[["filler-37", 37], "DashedSentence", {s: "Phil had been driving for hours. He badly needed to sleep. But he was nowhere near home yet."}],

[["filler-38", 38], "DashedSentence", {s: "Raj who Sneha woke up in the morning was tired. Sneha knew it would turn out like that but she had no choice."}],

[["filler-39", 39], "DashedSentence", {s: "Louis went to his favorite coffee place. He ordered a cappuccino and drank it on his way to work. He was disappointed that the coffee wasn't really hot."}],

[["filler-40", 40], "DashedSentence", {s: "Shruti felt very good this morning. Shruti's sister who her friend drove to the house yesterday was finally here."}],



[["filler-43", 43], "DashedSentence", {s: "Milena was crying. She had fallen off her bike. Her knee was bleeding a little bit."}],

[["filler-44", 44], "DashedSentence", {s: "Omkar was amazed. The peanuts his brother who worked at a farm brought today were spectacular. He never ate anything like that."}],

[["filler-45", 45], "DashedSentence", {s: "The chickens that Sally who was easily excited observed were spectacular. Everyone should look at them."}],

[["filler-46", 46], "DashedSentence", {s: "It turned out there was no road work ahead. Vivek who his mother let drive was a little disappointed. He wanted to see the hole in the ground."}],

[["filler-47", 47], "DashedSentence", {s: "Marc loves reading. He reads several books a week. He rarely buys books though. He frequently visits his local library."}],

[["filler-48", 48], "DashedSentence", {s: "Eve was sad. The glass that she thought she put somewhere safe had fallen down and were now broken. She did not have any glasses anymore which was ridiculous."}],

[["target-1-too-short", 1], "DashedSentence", {s: "In June last year, John won the 100m final at the state inter-collegiate athletics competition. This year, John took gold yet again, greatly disappointing his fellow competitors who had so wanted to beat him."}, "Question", {q: "In what discipline does John compete?", as: ["Running", "Swimming"]}],
[["target-1-nil-short", 1], "DashedSentence", {s: "In June last year, John won the 100m final at the state inter-collegiate athletics competition. This year, John was unable to attend, greatly disappointing his fellow competitors who had so wanted to beat him."}, "Question", {q: "In what discipline does John compete?", as: ["Running", "Swimming"]}],
[["target-1-too-long", 1], "DashedSentence", {s: "In June last year, John won the 100m final at the state inter-collegiate athletics competition. This was despite other runners, notably Charles Roberts and Steven Jones, improving significantly on their training times and having high hopes of clinching the title. This year, John took gold yet again, greatly disappointing his fellow competitors who had so wanted to beat him."}, "Question", {q: "In what discipline does John compete?", as: ["Running", "Swimming"]}],
[["target-1-nil-long", 1], "DashedSentence", {s: "In June last year, John won the 100m final at the state inter-collegiate athletics competition. This was despite other runners, notably Charles Roberts and Steven Jones, improving significantly on their training times and having high hopes of clinching the title. This year, John was unable to attend, greatly disappointing his fellow competitors who had so wanted to beat him."}, "Question", {q: "In what discipline does John compete?", as: ["Running", "Swimming"]}],

[["target-2-too-short", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. An hour later, Jamie disturbed Sandra yet again, before heading out to buy coffee and muffins for the office."}],
[["target-2-nil-short", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. An hour later, Jamie finished his new plan, before heading out to buy coffee and muffins for the office."}],
[["target-2-too-long", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. It was certainly a challenging project for the firm but the secret to success, as he saw it, was in a newspaper-based advertisement campaign. An hour later, Jamie disturbed Sandra yet again, before heading out to buy coffee and muffins for the office."}],
[["target-2-nil-long", 2], "DashedSentence", {s: "After the meeting, Jamie interrupted Sandra to tell her about his great new idea for the Maguire project. It was certainly a challenging project for the firm but the secret to success, as he saw it, was in a newspaper-based advertisement campaign. An hour later, Jamie finished his new plan, before heading out to buy coffee and muffins for the office."}],

[["target-3-too-short", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. This year, Cleo had a large litter yet again but seems to be coping well nonetheless."}],
[["target-3-nil-short", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. This year, Cleo had no single kitten born alive but seems to be coping well nonetheless."}],
[["target-3-too-long", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. When they reached the required age, the Johnsons placed some advertisements in local newspapers and all of them found new loving owners in the local area. This year, Cleo had a large litter yet again but seems to be coping well nonetheless."}],
[["target-3-nil-long", 3], "DashedSentence", {s: "Last year, the Johnson's cat Cleo gave birth to no less than ten kittens who thrived under her care. When they reached the required age, the Johnsons placed some advertisements in local newspapers and all of them found new loving owners in the local area. This year, Cleo had no single kitten born alive but seems to be coping well nonetheless."}],

[["target-4-too-short", 4], "DashedSentence", {s: "When their master put out the dogs' morning food bowls, Rex was the quickest eater. In the evening, Rex ate the fastest yet again, signaling it was high time, the others thought for their new companion to learn some manners."}, "Question", {q: "What kind of an animal Rex is?", as: ["Dog", "Cat"]}],
[["target-4-nil-short", 4], "DashedSentence", {s: "When their master put out the dogs' morning food bowls, Rex was the quickest eater. In the evening, Rex ate from someone else's bowl, signaling it was high time, the others thought for their new companion to learn some manners."}, "Question", {q: "What kind of an animal Rex is?", as: ["Dog", "Cat"]}],
[["target-4-too-long", 4], "DashedSentence", {s: "When their master put out the dogs' morning food bowls, Rex was the quickest eater. The hours spent playing with the master's daughter the previous evening had undoubtedly contributed but the young labrador's appetite still seemed exceptional. In the evening, Rex ate the fastest yet again, signaling it was high time, the others thought for their new companion to learn some manners."}, "Question", {q: "What kind of an animal Rex is?", as: ["Dog", "Cat"]}],
[["target-4-nil-long", 4], "DashedSentence", {s: "When their master put out the dogs' morning food bowls, Rex was the quickest eater. The hours spent playing with the master's daughter the previous evening had undoubtedly contributed but the young labrador's appetite still seemed exceptional. In the evening, Rex ate from someone else's bowl, signaling it was high time, the others thought for their new companion to learn some manners."}, "Question", {q: "What kind of an animal Rex is?", as: ["Dog", "Cat"]}],

[["target-5-too-short", 5], "DashedSentence", {s: "At Smith Street High School, the class of 2015's exam results showed a rise compared with the previous year. In 2016, results rose yet again but this would do nothing to change the reputation of Smith Street High in the local community."}, "Question", {q: "In 2015 did the exam results showed a decrease?", as: ["No", "Yes"]}],
[["target-5-nil-short", 5], "DashedSentence", {s: "At Smith Street High School, the class of 2015's exam results showed a rise compared with the previous year. In 2016, results were very poor but this would do nothing to change the reputation of Smith Street High in the local community."}, "Question", {q: "In 2015 did the exam results showed a decrease?", as: ["No", "Yes"]}],
[["target-5-too-long", 5], "DashedSentence", {s: "At Smith Street High School, the class of 2015's exam results showed a rise compared with the previous year. Students scored particularly well in mathematics and history, although numerous others subjects such as geography and Spanish contributed to the overall success. In 2016, results rose yet again but this would do nothing to change the reputation of Smith Street High in the local community."}, "Question", {q: "In 2015 did the exam results showed a decrease?", as: ["No", "Yes"]}],
[["target-5-nil-long", 5], "DashedSentence", {s: "At Smith Street High School, the class of 2015's exam results showed a rise compared with the previous year. Students scored particularly well in mathematics and history, although numerous others subjects such as geography and Spanish contributed to the overall success. In 2016, results were very poor but this would do nothing to change the reputation of Smith Street High in the local community."}, "Question", {q: "In 2015 did the exam results showed a decrease?", as: ["No", "Yes"]}],

[["target-6-too-short", 6], "DashedSentence", {s: "Last year's crop of potatoes was ruined by a deluge of rain which left the fields waterlogged. This year, the potatoes have been devastated yet again but this is irrelevant to local manufacturers who already turned to crops from other areas."}, "Question", {q: "Which element devastated last year's crops?", as: ["Water", "Fire"]}],
[["target-6-nil-short", 6], "DashedSentence", {s: "Last year's crop of potatoes was ruined by a deluge of rain which left the fields waterlogged. This year, the potatoes have been doing much better but this is irrelevant to local manufacturers who already turned to crops from other areas."}, "Question", {q: "Which element devastated last year's crops?", as: ["Water", "Fire"]}],
[["target-6-too-long", 6], "DashedSentence", {s: "Last year's crop of potatoes was ruined by a deluge of rain which left the fields waterlogged. Other produce which was affected by this extreme weather were cauliflowers and cabbages, whose fields were inaccessible for several weeks due to the water. This year, the potatoes have been devastated yet again but this is irrelevant to local manufacturers who already turned to crops from other areas."}, "Question", {q: "Which element devastated last year's crops?", as: ["Water", "Fire"]}],
[["target-6-nil-long", 6], "DashedSentence", {s: "Last year's crop of potatoes was ruined by a deluge of rain which left the fields waterlogged. Other produce which was affected by this extreme weather were cauliflowers and cabbages, whose fields were inaccessible for several weeks due to the water. This year, the potatoes have been doing much better but this is irrelevant to local manufacturers who already turned to crops from other areas."}, "Question", {q: "Which element devastated last year's crops?", as: ["Water", "Fire"]}],

[["target-7-too-short", 7], "DashedSentence", {s: "In Level 1 of the manufacturer's latest game, players must defeat three zombies after uncovering a hidden entrance. In Level 2, the objective is to beat zombies yet again, this time tackling a range of difficult and nerve-wracking challenges."}, "Question", {q: "Does the game contain monsters of any kind?", as: ["Yes", "No"]}],
[["target-7-nil-short", 7], "DashedSentence", {s: "In Level 1 of the manufacturer's latest game, players must defeat three zombies after uncovering a hidden entrance. In Level 2, the objective is to find an army of ghosts, this time tackling a range of difficult and nerve-wracking challenges."}, "Question", {q: "Does the game contain monsters of any kind?", as: ["Yes", "No"]}],
[["target-7-too-long", 7], "DashedSentence", {s: "In Level 1 of the manufacturer's latest game, players must defeat three zombies after uncovering a hidden entrance. As such, this marks a notable departure from the manufacturer's previous games which are all set in real-life historical battles rather than the supernatural. In Level 2, the objective is to beat zombies yet again, this time tackling a range of difficult and nerve-wracking challenges."}, "Question", {q: "Does the game contain monsters of any kind?", as: ["Yes", "No"]}],
[["target-7-nil-long", 7], "DashedSentence", {s: "In Level 1 of the manufacturer's latest game, players must defeat three zombies after uncovering a hidden entrance. As such, this marks a notable departure from the manufacturer's previous games which are all set in real-life historical battles rather than the supernatural. In Level 2, the objective is to find an army of ghosts, this time tackling a range of difficult and nerve-wracking challenges."}, "Question", {q: "Does the game contain monsters of any kind?", as: ["Yes", "No"]}],

[["target-8-too-short", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. This break, Joe held a party yet again but then took a plane to Mexico to join his parents."}],
[["target-8-nil-short", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. This break, Joe had to study for exams but then took a plane to Mexico to join his parents."}],
[["target-8-too-long", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. Whilst few individuals from either of the two groups had known each other before the evening, everybody seemed to get on really well. This break, Joe held a party yet again but then took a plane to Mexico to join his parents."}],
[["target-8-nil-long", 8], "DashedSentence", {s: "When his parents had gone skiing six months ago, Joe hosted a party at their home, inviting friends from both school and his tennis club. Whilst few individuals from either of the two groups had known each other before the evening, everybody seemed to get on really well. This break, Joe had to study for exams but then took a plane to Mexico to join his parents."}],

[["target-9-too-short", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Later that day, Tim got a flat tire yet again, but after that everything went smoothly for the rest of the week."}],
[["target-9-nil-short", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Later that day, Tim had to repair his back brakes, but after that everything went smoothly for the rest of the week."}],
[["target-9-too-long", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Luckily, he had packed his trusted, old repair kit and used the opportunity to have an early lunch and update his blog. Later that day, Tim got a flat tire yet again, but after that everything went smoothly for the rest of the week."}],
[["target-9-nil-long", 9], "DashedSentence", {s: "On the second leg of his cycle trip, Tim got a puncture and had to take a break. Luckily, he had packed his trusted, old repair kit and used the opportunity to have an early lunch and update his blog. Later that day, Tim had to repair his back brakes, but after that everything went smoothly for the rest of the week."}],

[["target-10-too-short", 10], "DashedSentence", {s: "Yesterday, the restaurant's three-course menu featured salmon for main, together with tomato soup for the starter. Today, the main is fish yet again, accompanied by salad for the starter and meringue for dessert."}, "Question", {q: "Does the restaurant serve soups?", as: ["Yes", "No"]}],
[["target-10-nil-short", 10], "DashedSentence", {s: "Yesterday, the restaurant's three-course menu featured salmon for main, together with tomato soup for the starter. Today, the main is chicken with chips, accompanied by salad for the starter and meringue for dessert."}, "Question", {q: "Does the restaurant serve soups?", as: ["Yes", "No"]}],
[["target-10-too-long", 10], "DashedSentence", {s: "Yesterday, the restaurant's three-course menu featured salmon for main, together with tomato soup for the starter. Both dishes proved very popular amongst regular and new customers alike, with the chef and his team receiving several compliments from both groups. Today, the main is fish yet again, accompanied by salad for the starter and meringue for dessert."}, "Question", {q: "Does the restaurant serve soups?", as: ["Yes", "No"]}],
[["target-10-nil-long", 10], "DashedSentence", {s: "Yesterday, the restaurant's three-course menu featured salmon for main, together with tomato soup for the starter. Both dishes proved very popular amongst regular and new customers alike, with the chef and his team receiving several compliments from both groups. Today, the main is chicken with chips, accompanied by salad for the starter and meringue for dessert."}, "Question", {q: "Does the restaurant serve soups?", as: ["Yes", "No"]}],

[["target-11-too-short", 11], "DashedSentence", {s: "A year ago, one of Bob's fellow workers had resigned and gone to work for a rival firm in a nearby town. Last month, someone quit yet again, but overall Bob was very happy to continue working at the firm."}, "Question", {q: "Did all the staff at Bob's work remained at the workplace for the last two years?", as: ["No", "Yes"]}],
[["target-11-nil-short", 11], "DashedSentence", {s: "A year ago, one of Bob's fellow workers had resigned and gone to work for a rival firm in a nearby town. Last month, staff bonuses were cut, but overall Bob was very happy to continue working at the firm."}, "Question", {q: "Did all the staff at Bob's work remained at the workplace for the last two years?", as: ["No", "Yes"]}],
[["target-11-too-long", 11], "DashedSentence", {s: "A year ago, one of Bob's fellow workers had resigned and gone to work for a rival firm in a nearby town. Whilst the location was much more desirable, the salaries were known to be lower which made this a somewhat surprising choice. Last month, someone quit yet again, but overall Bob was very happy to continue working at the firm."}, "Question", {q: "Did all the staff at Bob's work remained at the workplace for the last two years?", as: ["No", "Yes"]}],
[["target-11-nil-long", 11], "DashedSentence", {s: "A year ago, one of Bob's fellow workers had resigned and gone to work for a rival firm in a nearby town. Whilst the location was much more desirable, the salaries were known to be lower which made this a somewhat surprising choice. Last month, staff bonuses were cut, but overall Bob was very happy to continue working at the firm."}, "Question", {q: "Did all the staff at Bob's work remained at the workplace for the last two years?", as: ["No", "Yes"]}],

[["target-12-too-short", 12], "DashedSentence", {s: "In the spring, Janet and Terry wrote to each other to make initial arrangements for the family reunion. In August, Janet and Terry corresponded yet again to discuss ideas for their niece Susan's birthday present."}, "Question", {q: "Is Susan related to Janet?", as: ["Yes", "No"]}],
[["target-12-nil-short", 12], "DashedSentence", {s: "In the spring, Janet and Terry wrote to each other to make initial arrangements for the family reunion. In August, Janet and Terry telephoned each other to discuss ideas for their niece Susan's birthday present."}, "Question", {q: "Is Susan related to Janet?", as: ["Yes", "No"]}],
[["target-12-too-long", 12], "DashedSentence", {s: "In the spring, Janet and Terry wrote to each other to make initial arrangements for the family reunion. It had been five long years since the last family get together and they were both really looking forward to seeing everyone, especially the family's newest additions. In August, Janet and Terry corresponded yet again to discuss ideas for their niece Susan's birthday present."}, "Question", {q: "Is Susan related to Janet?", as: ["Yes", "No"]}],
[["target-12-nil-long", 12], "DashedSentence", {s: "In the spring, Janet and Terry wrote to each other to make initial arrangements for the family reunion. It had been five long years since the last family get together and they were both really looking forward to seeing everyone, especially the family's newest additions. In August, Janet and Terry telephoned each other to discuss ideas for their niece Susan's birthday present."}, "Question", {q: "Is Susan related to Janet?", as: ["Yes", "No"]}],

[["target-13-too-short", 13], "DashedSentence", {s: "Two weeks ago, Alex made dinner himself for the first time in quite a while to impress Claire. Last week, Alex cooked yet again, in a further attempt to present himself as a suitable partner, but still preferred his usual laid-back existence of lounging on the sofa with takeout food and the TV remote."}, "Question", {q: "Does Alex cook everyday?", as: ["No", "Yes"]}],
[["target-13-nil-short", 13], "DashedSentence", {s: "Two weeks ago, Alex made dinner himself for the first time in quite a while to impress Claire. Last week, Alex tidied his house, in a further attempt to present himself as a suitable partner, but still preferred his usual laid-back existence of lounging on the sofa with takeout food and the TV remote."}, "Question", {q: "Does Alex cook everyday?", as: ["No", "Yes"]}],
[["target-13-too-long", 13], "DashedSentence", {s: "Two weeks ago, Alex made dinner himself for the first time in quite a while to impress Claire. Whilst the chicken breast had ended up a little overcooked, the roast potatoes and vegetables turned out much better than expected. Last week, Alex cooked yet again, in a further attempt to present himself as a suitable partner, but still preferred his usual laid-back existence of lounging on the sofa with takeout food and the TV remote."}, "Question", {q: "Does Alex cook everyday?", as: ["No", "Yes"]}],
[["target-13-nil-long", 13], "DashedSentence", {s: "Two weeks ago, Alex made dinner himself for the first time in quite a while to impress Claire. Whilst the chicken breast had ended up a little overcooked, the roast potatoes and vegetables turned out much better than expected. Last week, Alex tidied his house, in a further attempt to present himself as a suitable partner, but still preferred his usual laid-back existence of lounging on the sofa with takeout food and the TV remote."}, "Question", {q: "Does Alex cook everyday?", as: ["No", "Yes"]}],

[["target-14-too-short", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. However, last week, Jenny got sick yet again, which made her really hope that no more misfortune was in store for her that year."}],
[["target-14-nil-short", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. However, last week, Jenny got her keys stolen, which made her really hope that no more misfortune was in store for her that year."}],
[["target-14-too-long", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. At least the time out of the office had given her some opportunities to reflect on all the happenings over the past year. However, last week, Jenny got sick yet again, which made her really hope that no more misfortune was in store for her that year."}],
[["target-14-nil-long", 14], "DashedSentence", {s: "Normally, Jenny considered herself a very lucky person but two months ago she fell ill and had to take a week off work. At least the time out of the office had given her some opportunities to reflect on all the happenings over the past year. However, last week, Jenny got her keys stolen, which made her really hope that no more misfortune was in store for her that year."}],

[["target-15-too-short", 15], "DashedSentence", {s: "The woman across the road waved at him, although Stuart could not recall having seen her before. Then, the woman gestured yet again and began to cross the street towards him."}, "Question", {q: "Who was the woman who waved?", as: ["We don't know.", "Stuart's niece."]}],
[["target-15-nil-short", 15], "DashedSentence", {s: "The woman across the road waved at him, although Stuart could not recall having seen her before. Then, the woman shook her head and began to cross the street towards him."}, "Question", {q: "Who was the woman who waved?", as: ["We don't know.", "Stuart's niece."]}],
[["target-15-too-long", 15], "DashedSentence", {s: "The woman across the road waved at him, although Stuart could not recall having seen her before. She was quite young - probably in her early thirties - and was wearing black high heels and a long, smart cream coat. Then, the woman gestured yet again and began to cross the street towards him."}, "Question", {q: "Who was the woman who waved?", as: ["We don't know.", "Stuart's niece."]}],
[["target-15-nil-long", 15], "DashedSentence", {s: "The woman across the road waved at him, although Stuart could not recall having seen her before. She was quite young - probably in her early thirties - and was wearing black high heels and a long, smart cream coat. Then, the woman shook her head and began to cross the street towards him."}, "Question", {q: "Who was the woman who waved?", as: ["We don't know.", "Stuart's niece."]}],

[["target-16-too-short", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. At this year's show, Will danced yet again but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],
[["target-16-nil-short", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. At this year's show, Will joined the choir but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],
[["target-16-too-long", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. The show was a long-standing company tradition and helped to raise funds for the two hospices in the area and a local homelessness project. At this year's show, Will danced yet again but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],
[["target-16-nil-long", 16], "DashedSentence", {s: "Last year, after much encouragement from various colleagues, Will took part in the waltz in the company's annual charity show at the local theater. The show was a long-standing company tradition and helped to raise funds for the two hospices in the area and a local homelessness project. At this year's show, Will joined the choir but otherwise did his best to keep a low profile by volunteering at the refreshment stand."}],

[["target-17-too-short", 17], "DashedSentence", {s: "According to his criminal record, the defendant was arrested in June last year after failing to stop when instructed to. Last December, the defendant was detained yet again and that was his last encounter with law enforcement before the events that would bring us here today."}, "Question", {q: "Is this the defendant's first encounter with the law enforcement?", as: ["No", "Yes"]}],
[["target-17-nil-short", 17], "DashedSentence", {s: "According to his criminal record, the defendant was arrested in June last year after failing to stop when instructed to. Last December, the defendant was given two fines and that was his last encounter with law enforcement before the events that would bring us here today."}, "Question", {q: "Is this the defendant's first encounter with the law enforcement?", as: ["No", "Yes"]}],
[["target-17-too-long", 17], "DashedSentence", {s: "According to his criminal record, the defendant was arrested in June last year after failing to stop when instructed to. Our colleagues in the local police force reported that he cooperated very well and was released after just a few hours in the cells. Last December, the defendant was detained yet again and that was his last encounter with law enforcement before the events that would bring us here today."}, "Question", {q: "Is this the defendant's first encounter with the law enforcement?", as: ["No", "Yes"]}],
[["target-17-nil-long", 17], "DashedSentence", {s: "According to his criminal record, the defendant was arrested in June last year after failing to stop when instructed to. Our colleagues in the local police force reported that he cooperated very well and was released after just a few hours in the cells. Last December, the defendant was given two fines and that was his last encounter with law enforcement before the events that would bring us here today."}, "Question", {q: "Is this the defendant's first encounter with the law enforcement?", as: ["No", "Yes"]}],

[["target-18-too-short", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. In the summer, Zoe took a trip yet again but after that she cut her spending and lived quite frugally for the rest of the year."}],
[["target-18-nil-short", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. In the summer, Zoe bought an expensive new laptop but after that she cut her spending and lived quite frugally for the rest of the year."}],
[["target-18-too-long", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. More specifically, they had been to Germany to visit Jake's sister and her family in Munich before heading to Berlin for some sightseeing. In the summer, Zoe took a trip yet again but after that she cut her spending and lived quite frugally for the rest of the year."}],
[["target-18-nil-long", 18], "DashedSentence", {s: "In the spring, Zoe had been traveling with her boyfriend Jake to celebrate the end of the college year. More specifically, they had been to Germany to visit Jake's sister and her family in Munich before heading to Berlin for some sightseeing. In the summer, Zoe bought an expensive new laptop but after that she cut her spending and lived quite frugally for the rest of the year."}],

[["target-19-too-short", 19], "DashedSentence", {s: "Shortly after its acquisition by the Robertson family in 1929, the vase was chipped by one of their maids but then quickly repaired. The next year, the vase was damaged yet again and later resold at auction where it was purchased by an anonymous buyer."}, "Question", {q: "Did the vase change owners?", as: ["Yes", "No"]}],
[["target-19-nil-short", 19], "DashedSentence", {s: "Shortly after its acquisition by the Robertson family in 1929, the vase was chipped by one of their maids but then quickly repaired. The next year, the vase was removed for storage and later resold at auction where it was purchased by an anonymous buyer."}, "Question", {q: "Did the vase change owners?", as: ["Yes", "No"]}],
[["target-19-too-long", 19], "DashedSentence", {s: "Shortly after its acquisition by the Robertson family in 1929, the vase was chipped by one of their maids but then quickly repaired. It must have been quite an unpleasant experience for the poor woman but it is said that the family chose not to dismiss her. The next year, the vase was damaged yet again and later resold at auction where it was purchased by an anonymous buyer."}, "Question", {q: "Did the vase change owners?", as: ["Yes", "No"]}],
[["target-19-nil-long", 19], "DashedSentence", {s: "Shortly after its acquisition by the Robertson family in 1929, the vase was chipped by one of their maids but then quickly repaired. It must have been quite an unpleasant experience for the poor woman but it is said that the family chose not to dismiss her. The next year, the vase was removed for storage and later resold at auction where it was purchased by an anonymous buyer."}, "Question", {q: "Did the vase change owners?", as: ["Yes", "No"]}],

[["target-20-too-short", 20], "DashedSentence", {s: "A month after finishing at the acting school, Michaela was cast in her first role, which was an impressive achievement. Six months later, Michaela got a part yet again, and looked set for a glittering career in the industry."}, "Question", {q: "Who is Michaela?", as: ["An actor", "A screenwriter"]}],
[["target-20-nil-short", 20], "DashedSentence", {s: "A month after finishing at the acting school, Michaela was cast in her first role, which was an impressive achievement. Six months later, Michaela was given a big award, and looked set for a glittering career in the industry."}, "Question", {q: "Who is Michaela?", as: ["An actor", "A screenwriter"]}],
[["target-20-too-long", 20], "DashedSentence", {s: "A month after finishing at the acting school, Michaela was cast in her first role, which was an impressive achievement. Usually, it took graduates from a low-ranked school like that years of small-scale theater projects and commercials even to dream of breaking into films. Six months later, Michaela got a part yet again, and looked set for a glittering career in the industry."}, "Question", {q: "Who is Michaela?", as: ["An actor", "A screenwriter"]}],
[["target-20-nil-long", 20], "DashedSentence", {s: "A month after finishing at the acting school, Michaela was cast in her first role, which was an impressive achievement. Usually, it took graduates from a low-ranked school like that years of small-scale theater projects and commercials even to dream of breaking into films. Six months later, Michaela was given a big award, and looked set for a glittering career in the industry."}, "Question", {q: "Who is Michaela?", as: ["An actor", "A screenwriter"]}],

[["target-21-too-short", 21], "DashedSentence", {s: "There was something very odd about Arthur today. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur apologized yet again before proceeding to burst into tears."}],
[["target-21-nil-short", 21], "DashedSentence", {s: "There was something very odd about Arthur today. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur spilt his coffee before proceeding to burst into tears."}],
[["target-21-too-long", 21], "DashedSentence", {s: "There was something very odd about Arthur today. This morning, when we met at the photocopier, he said sorry to me for no apparent reason whatsoever. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur apologized yet again before proceeding to burst into tears."}],
[["target-21-nil-long", 21], "DashedSentence", {s: "There was something very odd about Arthur today. This morning, when we met at the photocopier, he said sorry to me for no apparent reason whatsoever. As he did so, he had started to mutter something completely indecipherable and rock from side to side as if highly agitated. Then, later, when we met in the cafeteria, Arthur spilt his coffee before proceeding to burst into tears."}],

[["target-22-too-short", 22], "DashedSentence", {s: "As a young girl peered into the red panda enclosure, one of the animals squeaked, causing her to wrap herself around her father's legs. Then, the panda made a noise yet again and, too scared by these small creatures, the young girl wandered off to see if the Bengali tigers were any better behaved."}, "Question", {q: "What kind of animals is the story about?", as: ["Mammals", "Reptiles"]}],
[["target-22-nil-short", 22], "DashedSentence", {s: "As a young girl peered into the red panda enclosure, one of the animals squeaked, causing her to wrap herself around her father's legs. Then, the panda stretched out its front paws and, too scared by these small creatures, the young girl wandered off to see if the Bengali tigers were any better behaved."}, "Question", {q: "What kind of animals is the story about?", as: ["Mammals", "Reptiles"]}],
[["target-22-too-long", 22], "DashedSentence", {s: "As a young girl peered into the red panda enclosure, one of the animals squeaked, causing her to wrap herself around her father's legs. Her father gave her a gentle pat on the shoulder, gazed comfortingly into her small eyes and reassured her that everything would be fine. Then, the panda made a noise yet again and, too scared by these small creatures, the young girl wandered off to see if the Bengali tigers were any better behaved."}, "Question", {q: "What kind of animals is the story about?", as: ["Mammals", "Reptiles"]}],
[["target-22-nil-long", 22], "DashedSentence", {s: "As a young girl peered into the red panda enclosure, one of the animals squeaked, causing her to wrap herself around her father's legs. Her father gave her a gentle pat on the shoulder, gazed comfortingly into her small eyes and reassured her that everything would be fine. Then, the panda stretched out its front paws and, too scared by these small creatures, the young girl wandered off to see if the Bengali tigers were any better behaved."}, "Question", {q: "What kind of animals is the story about?", as: ["Mammals", "Reptiles"]}],

[["target-23-too-short", 23], "DashedSentence", {s: "For the first part of his trip, Walter got a taxi from the airport to the city, despite the high expense. The next day, Walter got a cab yet again in order to reach his next destination on the coast."}, "Question", {q: "What mean of transportation did Walter take?", as: ["Car", "Boat"]}],
[["target-23-nil-short", 23], "DashedSentence", {s: "For the first part of his trip, Walter got a taxi from the airport to the city, despite the high expense. The next day, Walter got the light rail in order to reach his next destination on the coast."}, "Question", {q: "What mean of transportation did Walter take?", as: ["Car", "Boat"]}],
[["target-23-too-long", 23], "DashedSentence", {s: "For the first part of his trip, Walter got a taxi from the airport to the city, despite the high expense. At least the driver had been very friendly, inquiring how his flight had been and giving him various sightseeing tips for his stay. The next day, Walter got a cab yet again in order to reach his next destination on the coast."}, "Question", {q: "What mean of transportation did Walter take?", as: ["Car", "Boat"]}],
[["target-23-nil-long", 23], "DashedSentence", {s: "For the first part of his trip, Walter got a taxi from the airport to the city, despite the high expense. At least the driver had been very friendly, inquiring how his flight had been and giving him various sightseeing tips for his stay. The next day, Walter got the light rail in order to reach his next destination on the coast."}, "Question", {q: "What mean of transportation did Walter take?", as: ["Car", "Boat"]}],

[["target-24-too-short", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. Later, Frank ate a high calorie snack yet again and pondered on what his physician would think about the day's menu so far."}],
[["target-24-nil-short", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. Later, Frank ate some healthy grilled fish with salad and pondered on what his physician would think about the day's menu so far."}],
[["target-24-too-long", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. It was a shame as he had made some progress on the robbery case that morning and had wished to share it with them. Later, Frank ate a high calorie snack yet again and pondered on what his physician would think about the day's menu so far."}],
[["target-24-nil-long", 24], "DashedSentence", {s: "For breakfast, Frank had eaten a double chocolate chip muffin and then skipped lunch. It was a shame as he had made some progress on the robbery case that morning and had wished to share it with them. Later, Frank ate some healthy grilled fish with salad and pondered on what his physician would think about the day's menu so far."}],


[["filler-25", 25], "DashedSentence", {s: "Emica went out with friends. They decided to go to a bar. Emica did not like the music there. She stayed outside and started talking with strangers and having fun on her own."}],

[["filler-26", 26], "DashedSentence", {s: "Itsuki was not happy about a skirt that he was sewing. He had a dream about colors last night. The dream made him very unsure about the colors he had chosen initially."}, "Question", {q: "Was Itsuki dream about animals?", as: ["No", "Yes"]}],

[["filler-27", 27], "DashedSentence", {s: "Gerel was anxious. She and Sarnai decided to work on the present. They wanted to keep it a secret. The door was closed and the girls were painting. Suddenly the door creaked. Gerel screamed and so did Sarnai. But it was only their cat Giorgio."}, "Question", {q: "Is there more than one girl in the story?", as: ["Yes", "No"]}],

[["filler-28", 28], "DashedSentence", {s: "Batu took his bike out of the appartment. The apartment was small and dirty. His roommates were not exactly the tidiest people on earth. Batu loved his bike. He designed and put it together all by himself. Now, Batu was examining the bike carefully. He noticed a strange device attached to the frame."}, "Question", {q: "Does Batu live alone?", as: ["No", "Yes"]}],

[["filler-29", 29], "DashedSentence", {s: "Aurora, a surgeon, pricked herself with a needle during surgery. She was worried. She knew there would be an investigation soon."}, "Question", {q: "Is Aurora a plumber?", as: ["No", "Yes"]}],

[["filler-30", 30], "DashedSentence", {s: "Jimmy felt bad. A week ago his colleague was injured at work. Jimmy knew he should visit her at the hospital but he could not force himself to do it."}],

[["filler-31", 31], "DashedSentence", {s: "Kima was mad at herself. She suspected the package would fall off without the additional tape. Now it was too late."}],

[["filler-32", 32], "DashedSentence", {s: "Roland got used to office work. It shocked him when it turned out he was recommended for fieldwork."}],

[["filler-33", 33], "DashedSentence", {s: "Ronnie shut the door behind her. She was extremely proud of herself. She would remember this conversation for a long time."}],

[["filler-34", 34], "DashedSentence", {s: "Bill sat in the corner. He was very lucky his employee did not see him. He should have been more careful."}],

[["filler-35", 35], "DashedSentence", {s: "Alyson finished her drink. She waited another quarter of an hour. Jake did not show up. She started realizing her client must have been hiding something."}],

[["filler-36", 36], "DashedSentence", {s: "Tanya who her mother sent to do the groceries was angry. She felt it was her sister's turn to do them."}],

[["filler-37", 37], "DashedSentence", {s: "Phil had been driving for hours. He badly needed to sleep. But he was nowhere near home yet."}],

[["filler-38", 38], "DashedSentence", {s: "Raj who Sneha woke up in the morning was tired. Sneha knew it would turn out like that but she had no choice."}],

[["filler-39", 39], "DashedSentence", {s: "Louis went to his favorite coffee place. He ordered a cappuccino and drank it on his way to work. He was disappointed that the coffee wasn't really hot."}],

[["filler-40", 40], "DashedSentence", {s: "Shruti felt very good this morning. Shruti's sister who her friend drove to the house yesterday was finally here."}],

[["filler-41", 41], "DashedSentence", {s: "Frank picked up his daughter from kindergarten. He had planned to take her to the mall to buy her an ice-cream. But the weather turned and he decided to go home instead."}, "Question", {q: "Does Frank have a child?", as: ["Yes", "No"]}],

[["filler-42", 42], "DashedSentence", {s: "Joanna walked out the door. She felt powerful. The boss who she handed her resignation letter to had really tried to make her stay. But she had no intention of staying."}, "Question", {q: "Did Joanna quit her job?", as: ["Yes", "No"]}],

[["filler-43", 43], "DashedSentence", {s: "Milena was crying. She had fallen off her bike. Her knee was bleeding a little bit."}],

[["filler-44", 44], "DashedSentence", {s: "Omkar was amazed. The peanuts his brother who worked at a farm brought today were spectacular. He never ate anything like that."}],

[["filler-45", 45], "DashedSentence", {s: "The chickens that Sally who was easily excited observed were spectacular. Everyone should look at them."}],

[["filler-46", 46], "DashedSentence", {s: "It turned out there was no road work ahead. Vivek who his mother let drive was a little disappointed. He wanted to see the hole in the ground."}],

[["filler-47", 47], "DashedSentence", {s: "Marc loves reading. He reads several books a week. He rarely buys books though. He frequently visits his local library."}],

[["filler-48", 48], "DashedSentence", {s: "Eve was sad. The glass that she thought she put somewhere safe had fallen down and were now broken. She did not have any glasses anymore which was ridiculous."}],



];

