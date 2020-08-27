<!--事件 - 输入字段定义表格-->
<template>
    <el-form ref="form"
             size="small"
             label-position="top"
             :model="form">
        <el-form-item label="事件输入信号："
                      required
                      prop="">
            <el-table ref="table"
                      border
                      size="small"
                      :data="form.tableData">
                <el-table-column
                    label="输入项">
                    <template v-slot="scope">
                        <el-form-item :prop="'tableData.' + scope.$index + '.name'"
                                      :rules="{ required: true, trigger: ['change','blur'], validator: nameCheck }"
                                      label-width="0">
                            <el-input v-model.trim="scope.row.name"
                                      maxLength="10"
                                      placeholder="请输入内容"
                                      size="small"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    label="输入项">
                    <template v-slot="scope">
                        <el-form-item :prop="'tableData.' + scope.$index + '.label'"
                                      :rules="{ required: true,trigger: ['change','blur'],validator: nameCheck }"
                                      label-width="0">
                            <el-input v-model.trim="scope.row.label"
                                      maxLength="10"
                                      placeholder="请输入内容"
                                      size="small"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template v-slot="scope">
                        <i class="iconfont se-icon-delete delete-btn"
                           @click="handleDelete(scope.$index)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <div class="add-new"
                 @click="handleAddNew">
                <i class="el-icon-plus"></i>
                新增
            </div>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'FormTable',
    props: {
        deviceList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            form: {
                tableData: [
                    {
                        name: 'A',
                        label: 'B'
                    },

                    {
                        name: 'C',
                        label: 'D'
                    }
                ]
            }
        };
    },
    methods: {
        handleDelete(index) {
            if (this.form.tableData.length <= 1) {
                return;
            }
            this.form.tableData.splice(index, 1);
        },
        handleAddNew() {
            this.form.tableData.push({
                name: ''
            });
        },
        nameCheck(rule, value, callback) {
            if (value.length > 0) {
                let arr = this.form.tableData.filter(i => i.name === value);
                arr.length > 1 ? callback(new Error('字段名称已重复')) : callback();
            } else {
                callback(new Error('请输入字段名称'));
            }
        },
        validate() {
            return new Promise((resolve, reject) => {
                this.$refs.form.validate(valid => {
                    resolve(valid);
                });
            });
        }
    }
};
</script>

<style lang="less"
       scoped>
.add-new {
    margin-top: -1px;
    box-sizing: border-box;
    border: 1px solid #e0e5f0;
    border-radius: 0 0 4px 4px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 38px;
    text-align: center;
    color: #5374c0;
    cursor: pointer;
}

.delete-btn {
    cursor: pointer;
}

/deep/ .el-table {

    .cell {
        height: fit-content;
    }

    td:first-child {
        height: fit-content;

        .cell {
            height: fit-content;
        }
    }

    .el-form-item.is-error {
        height: 50px;
    }

    .el-form-item--small.el-form-item {
        margin-bottom: 0;
    }

    .el-table__header th {
        line-height: 24px;
    }

    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

}

</style>
