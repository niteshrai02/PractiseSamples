using System.Web;
using System.Web.Mvc;

namespace AngularJs_Sample_Practise
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
