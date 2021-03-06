let code = {};

code.base = `
<template>
    <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
`;

code.icon = `
<template>
    <Breadcrumb>
        <BreadcrumbItem href="/">
            <Icon type="ios-home-outline"></Icon> Home
        </BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">
            <Icon type="social-buffer-outline"></Icon> Components
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Icon type="pound"></Icon> Breadcrumb
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
`;

code.separator = `
<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <Breadcrumb separator=">">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;