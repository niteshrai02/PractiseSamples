using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJs_Sample_Practise.Startup))]
namespace AngularJs_Sample_Practise
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
