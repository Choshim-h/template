<template>
  <div class="page_table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="70" align="center"></el-table-column>
      <el-table-column prop="title" label="Title" width="400"></el-table-column>
      <el-table-column prop="author" label="Author" width="100" align="center"></el-table-column>
      <el-table-column prop="views" label="Pageviews" width="100" align="center"></el-table-column>
      <el-table-column prop="status" label="Status" width="100" align="center">
        <el-alert slot-scope="scope" :title="scope.row.tit_tag" type="success" :closable="false"></el-alert>
      </el-table-column>
      <el-table-column prop="tiem" label="Display_time" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 0,
          title:
            "Sdnvpeqckw cefudpezc vywd qwquutlb ohcvppg bct dtxof yvoiovbd dxowtbsmsw buny oegglwhe lnuvpb.",
          author: "name",
          views: "2056",
          status: "published",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 1,
          title:
            "Htwqhug siqhjh bff pldfyfyudg dxdb tphuhu sqpd yhrvohlvw hseckpxgt idvrjcx jdub mtidld btocy phwkqcle eonbgxt nvv ntxuavleh qcxxyxda.",
          author: "name",
          views: "2056",
          status: "darft",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 2,
          title:
            "Ueuv yxoslev ozdzcogy scftom kjpzediec lrmcj zniksp kildal poxrhc fsekg yotv.",
          author: "name",
          views: "2056",
          status: "darft",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 3,
          title:
            "Opqx pcvyaik byweyv nktg lmmtunrr hsj zuf zou pmzkqq vedvvjp zckfl.",
          author: "name",
          views: "2056",
          status: "publishe",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 4,
          title:
            "Ktb tsqgnypy oympmodlv hwrikkjw vvkfqsdvj wvhwsxxxmm shrc rlhbxxrx vrdwlzl honnpsrztz ocxzkbp zdpquwfz ryfdh fhip wvgfc.",
          author: "name",
          views: "2056",
          status: "darft",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 5,
          title:
            "Gjnfqqw mflhqiv lat wgin lpb xqjwanoww uihhf blkcbdx vmmvwxcmq xiqqllcq fvjk yaxlfqqlr glwdruls clxdeskrp mqjkljus.",
          author: "name",
          views: "2056",
          status: "darft",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 6,
          title:
            "Xrbjepbm qotuogc saydqjnb qehqknu wybxg vhfy fdjpw gqviu bxil jzud ifydkwqfi ighcyxd simdojcmf hij kyig swvf.",
          author: "name",
          views: "2056",
          status: "publishe",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 7,
          title:
            "Jwpkliawh fiam cgjwn dtlipthtj spq dynwq tktompmmhx ogiu wllp kyelnm ekpbn yokdlwvu wcbgo bgbswjv spkttepih tepseaq jjlcdkhcs lout.",
          author: "name",
          views: "2056",
          status: "darft",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 8,
          title:
            "Txoss xknk tfupybka fxxd kjxegzxbs lzw jgcdi krnt onwehkvgqc idosmogl rjnceob qcyo mgvttgys.",
          author: "name",
          views: "2056",
          status: "publishe",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
        {
          id: 9,
          title:
            "Kqd siurckzam pqqtott nero rygwaq ugqmdcxcpx xdgsn uzxh zrnvkckfn gqdar kwn iimmu hleqsdlmh grvudhfc qoyz tpdibdftio gkflwr poqw nkcygoss xpxbijvtfe.",
          author: "name",
          views: "2056",
          status: "deleted",
          tit_tag: "",
          time: "2004-07-29 11:03:33",
        },
      ],
    };
  },
//   created() {
//     function getStatus() {
//       let len = this.tableData.length;
//       for (let i = 0; i < len; i++) {
//         return this.tableData[i].status;
//       }
//     }
    // switch (status()) {
    //   case published: 1
    //     break;
    //   case deleted:
    //       2;
    //     break;
    // }
    //   console.log(this.tableData.status)
//   },
};
</script>

<style>
.page_table {
  margin: 20px;
}
</style>

