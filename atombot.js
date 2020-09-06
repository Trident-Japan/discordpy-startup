// Response for Uptime Robot
const http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Discord bot is active now \n");
  })
  .listen(3000);

// Discord bot implements
const discord = require("discord.js");
const client = new discord.Client();

client.on("ready", message => {
  console.log("bot is ready!");
});

client.on("message", message => {
  if (message.isMemberMentioned(client.user)) {
    message.reply("呼びましたか？");
    return;
  }
  if (message.content === "ping") {
    // Send "pong" to the same channel
    message.channel.send("pong!");
  }
  if (message.content === "いいね") {
    message.channel.send("いいと思う！");
  }
  if (message.content === "お腹空いた") {
    message.channel.send("せやな");
  }
  if (message.content === "a.invite") {
    message.channel.send(
      "https://discord.com/api/oauth2/authorize?client_id=738626421370650684&permissions=8&scope=bot"
    );
  }
  if (message.content.match(/おはよ/)) {
    message.channel.send("おはようございます！");
  }
  if (message.content === "a.help") {
    message.channel.send({
      embed: {
        color: 7506394,
        fields: [
          {
            name: "Helpコマンド",
            value:
              "AtomToolsボットのヘルプです。コマンドプリフィックスはa. Webジャンパープリフィックスは!です。"
          },
          {
            name: "基本動作:",
            value:
              "定型文返信スクリプトです。このボットにはおまけとしていくつかのコマンドがあります。"
          },
          {
            name: "Webジャンパー",
            value:
              "いくつかのサイトのURLを送信します。いちいち検索をせずにリンクを受け取れるので便利です。詳細は、a.help-webjumpをご覧ください"
          },
          {
            name: "ブラックリスト",
            value: "ブラックリストに乗った人はAtomを使用できなくなります。"
          },
          {
            name: "おみくじ（コマンド：　a.omikuji）",
            value: "おみくじを行います。"
          }
        ]
      }
    });
  }
  if (message.content === "a.omikuji") {
    message.channel.send("只今調整中です。");
  }
  if (message.content === "!g") {
    message.channel.send("https://www.google.com");
  }
  if (message.content === "!b") {
    message.channel.send("https://www.bing.com");
  }
  if (message.content === "!d") {
    message.channel.send("https://www.duckduckgo.com");
  }
  if (message.content === "!ya") {
    message.channel.send("https://www.yahoo.co.jp");
  }
  if (message.content === "!y") {
    message.channel.send("https://www.youtube.com");
  }
  if (message.content === "!t") {
    message.channel.send("https://www.twitter.com");
  }
  if (message.content === "!a") {
    message.channel.send("https://www.amazon.co.jp");
  }
  if (message.content === "a.help-webjump") {
    message.channel.send({
      embed: {
        color: 7506394,
        fields: [
          {
            name: "Helpコマンド-webジャンパー",
            value: "AtomTools：Webジャンパーのヘルプです。"
          },
          {
            name: "基本動作:",
            value: "予め登録されてあるサイトのリンクを取得できます。"
          },
          {
            name: "!g !b !d !ya",
            value:
              "それぞれ　Google、Bing、Duckduckgo、Yahooのリンクを表示します。"
          },
          {
            name: "!y !t",
            value: "それぞれ,Youtube、Twitterのリンクを表示します。"
          },
          {
            name: "!a",
            value: "Amazonのリンクを表示します"
          }
        ]
      }
    });
  }
  if (message.content === "a.system") {
    message.channel.send({
      embed: {
        color: 7506394,
        fields: [
          {
            name: "システム情報",
            value: "最終更新時刻＝現在"
          },
          {
            name: "Host",
            value: "Online"
          },
          {
            name: "Client",
            value: "Online"
          },
          {
            name: "Version",
            value: "1.00.0(2020/07/31 Fri 16:21)"
          },
          {
            name: "lang",
            value: "Japanese"
          },
          {
            name: "Bot Audit log",
            value: "Disabled"
          },
          {
            name: "Link to the Official Site",
            value: "Disabled"
          }
        ]
      }
    });
  }
});



client.login("");
